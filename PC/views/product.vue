<template>
  <div class="product-page">
    <h1>{{ $t('product.title') }}</h1>
    <p>{{ $t('product.description') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.product-page {
  padding: 20px;
}
</style>
