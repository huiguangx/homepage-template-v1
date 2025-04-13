<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer Content -->
    <div class="text-center py-4">
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
const { locale, setLocale } = useI18n()
const { switchLanguage } = useLanguageSwitch()
</script>

<style scoped>
.link-style {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}
.link-style:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
