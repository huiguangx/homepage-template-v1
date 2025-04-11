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
  </div>
</template>

<script setup lang="ts">
import APPLink from '~/components/AppLink.vue'
type SupportedLocale = 'en' | 'zh'

const { locale, setLocale } = useI18n()
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
const tabs = [
  { name: '首页', path: '/' },
  { name: '产品介绍', path: '/product' },
  { name: '招贤纳士', path: '/careers' },
  { name: '关于我们', path: '/about' },
]
</script>
