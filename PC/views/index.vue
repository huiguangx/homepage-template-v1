<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <!-- Left side (logo/name) -->
      <div class="text-sm font-bold">{{ $t('welcome') }}</div>

      <!-- Right side navigation tabs -->
      <div class="flex space-x-8">
        <APPLink
          v-for="tab in tabs"
          :key="tab.name"
          :to="tab.path"
          class="relative py-2 transition-all duration-300 hover:text-white"
        >
          {{ tab.name }}
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </APPLink>
        <NuxtLink to="/about">aaaaaaa</NuxtLink>
        <div class="w-32 h-10 bg-black">
          <button v-if="locale === 'zh'" @click="switchLanguage('en')">English</button>
          <button v-else @click="switchLanguage('zh')">简体中文</button>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>
    <div>
      <a
        href="https://mp.weixin.qq.com/s/xz_n6Udx744VzlfR6eyKdg"
        target="_blank"
        rel="noopener noreferrer"
        class="link-style"
      >
        点击查看微信文章
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import APPLink from '~/components/AppLink.vue'
type SupportedLocale = 'en' | 'zh'
const localePath = useLocalePath()
const { t, locale, setLocale } = useI18n()
const cookie = useCookie('i18n_redirected', {
  maxAge: 60 * 60 * 24 * 365, // 设置有效期为 1 年
})
const { switchLanguage } = useLanguageSwitch()
const changeLanguage = (newLocale: SupportedLocale) => {
  setLocale(newLocale)
  cookie.value = newLocale
}

onMounted(() => {
  const userLang = cookie.value as SupportedLocale | null
  if (userLang && (userLang === 'en' || userLang === 'zh')) {
    locale.value = userLang
    setLocale(userLang)
  }
})
const tabs = computed(() => [
  { name: t('menu.home'), path: '/' },
  { name: t('menu.products'), path: '/product' },
  { name: t('menu.careers'), path: '/careers' },
  { name: t('menu.about'), path: '/about' },
])
</script>
