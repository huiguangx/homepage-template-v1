<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <!-- Left side (logo/name) -->
      <div class="text-2xl font-bold">LOGO</div>

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
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup>
const tabs = [{ name: '首页' }, { name: '产品介绍' }, { name: '招贤纳士' }, { name: '关于我们' }]
</script>
