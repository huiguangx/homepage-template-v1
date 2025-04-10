<script setup>
// import Header from './Header/Header.vue'
// import Footer from './Footer/Footer.vue'
const i18nHead = useLocaleHead()
useHead(() => i18nHead.value)
</script>

<template>
  <div>
    <!-- <slot name="header">
      <Header></Header>
    </slot> -->
    <slot></slot>
    <!-- <slot name="footer">
      <Footer></Footer>
    </slot> -->
  </div>
</template>

<style lang="scss" scoped></style>
