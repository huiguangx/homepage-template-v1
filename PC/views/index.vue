<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <!-- Left side (logo/name) -->
      <div class="text-sm font-bold">{{ $t('welcome') }}</div>

      <!-- Right side navigation tabs -->
      <div class="flex space-x-8">
        <a
          v-for="tab in tabs"
          :key="tab.name"
          href="#"
          class="relative py-2 transition-all duration-300 hover:text-white"
        >
          {{ tab.name }}
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </a>

        <div class="w-32 h-10 bg-black">
          <button v-if="locale === 'zh-cn'" @click="changeLanguage('en')">English</button>
          <button v-else @click="changeLanguage('zh-cn')">简体中文</button>
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
type SupportedLocale = 'en' | 'zh-cn'

const { locale, setLocale } = useI18n()
const changeLanguage = (newLocale: SupportedLocale) => {
  setLocale(newLocale)
  localStorage.setItem('user-lang', newLocale)
  console.log(newLocale)
}

onMounted(() => {
  const userLang = localStorage.getItem('user-lang') as SupportedLocale | null
  if (userLang && (userLang === 'en' || userLang === 'zh-cn')) {
    locale.value = userLang
    setLocale(userLang)
  }
})
const tabs = [{ name: '首页' }, { name: '产品介绍' }, { name: '招贤纳士' }, { name: '关于我们' }]
</script>
