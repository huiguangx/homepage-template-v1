<template>
  <div class="pc-device-warp">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>
<!-- 不使用 scoped -->
<style lang="scss">
@use './style/base.scss';
</style>
