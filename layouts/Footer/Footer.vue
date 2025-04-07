<template>
  <header class="w-full bg-black text-white">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo and Brand -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
            <span class="text-white font-bold">星</span>
          </div>
          <span class="text-xl font-bold">星尘智能</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-2">
          <a href="#" class="text-white hover:text-purple-400 transition-colors">产品介绍</a>
          <a href="#" class="text-white hover:text-purple-400 transition-colors">关于我们</a>
          <a href="#" class="text-white hover:text-purple-400 transition-colors">招贤纳士</a>
          <a href="#" class="text-white hover:text-purple-400 transition-colors">中/英</a>
        </nav>

        <!-- Social Media Icons - Desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- 社交媒体图标占位符 -->
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">微信</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">视频</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">抖音</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">油管</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">推特</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">抖音</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white focus:outline-none" @click="toggleMenu">
          <span v-if="isMenuOpen" class="block w-6 h-6">✕</span>
          <span v-else class="block w-6 h-6">☰</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4">
        <nav class="flex flex-col space-y-4">
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors"
            @click="isMenuOpen = false"
          >
            产品介绍
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors"
            @click="isMenuOpen = false"
          >
            关于我们
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors"
            @click="isMenuOpen = false"
          >
            招贤纳士
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors"
            @click="isMenuOpen = false"
          >
            中/英
          </a>
        </nav>

        <!-- Social Media Icons - Mobile -->
        <div class="flex items-center space-x-4 mt-4">
          <!-- 社交媒体图标占位符 -->
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">微信</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">视频</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">抖音</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">油管</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">推特</span>
          </a>
          <a
            href="#"
            class="text-white hover:text-purple-400 transition-colors w-5 h-5 flex items-center justify-center"
          >
            <span class="icon">抖音</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright Footer -->
    <div class="text-center py-2 text-xs text-gray-500 border-t border-gray-800">
      <div class="mb-2">Copyright © Astribot. All Rights Reserved.</div>

      <!-- 添加的ICP备案信息和公安备案信息 -->
      <div
        class="footer-bottom-container flex flex-col sm:flex-row items-center justify-center gap-4 mt-2"
      >
        <a
          class="footer-bottom-link hover:text-gray-300"
          href="http://beian.miit.gov.cn/"
          target="_blank"
        >
          粤ICP备2025360189号
        </a>
        <div class="flex items-center">
          <img
            src="@/assets/images/index/footerPage/policeLogo.png"
            alt="ctmon"
            style="
              width: max(0.18rem, 15px);
              height: max(0.18rem, 15px);
              vertical-align: top;
              margin-right: 5px;
            "
          />
          <a
            class="footer-bottom-link hover:text-gray-300"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002006488"
            rel="noreferrer"
            target="_blank"
          >
            粤公网安备44030002006488号
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.icon {
  font-size: 0.8rem;
}

.footer-bottom-link {
  color: #888;
  transition: color 0.2s;
}
</style>
