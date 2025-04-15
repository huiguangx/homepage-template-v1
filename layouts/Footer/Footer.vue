<template>
  <footer class="bg-black text-white py-6">
    <div class="mx-auto px-4 md:px-8">
      <!-- 顶部导航和社交媒体区域 -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <!-- 左侧 Logo 和导航 -->
        <div class="flex items-end space-x-2">
          <!-- Logo 和公司名称 -->
          <div class="flex items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-purple-600"
            >
              <path d="M14 2L2 24H26L14 2Z" fill="currentColor" />
            </svg>
            <span class="ml-2 text-sm font-medium">星尘智能</span>
          </div>

          <!-- 导航菜单 -->
          <nav class="flex items-center">
            <ul class="flex space-x-1 text-[16px]">
              <li>
                <AppLink to="/" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.home') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/product" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.products') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/careers" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.careers') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/about" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.about') }}
                </AppLink>
              </li>
              <li>
                <button
                  @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
                  class="hover:text-gray-300 transition-colors"
                >
                  {{ locale === 'zh' ? 'EN' : '中文' }}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 右侧社交媒体图标 -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <!-- 微信 -->
          <div class="relative group">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"
                />
              </svg>
            </a>
            <div
              class="absolute hidden group-hover:block top-full mt-1 w-8 h-8 bg-white rounded-sm"
            >
              <img
                src="~/assets/images/footer/index-s1-qr-en.png"
                alt="微信二维码"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <!-- 日历/新闻 -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"
              />
            </svg>
          </a>

          <!-- 抖音 -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.53 20c6.237 0 9.65-5.166 9.65-9.65 0-.15 0-.298-.01-.447A6.92 6.92 0 0024 7.764a6.79 6.79 0 01-1.95.535 3.4 3.4 0 001.495-1.88 6.83 6.83 0 01-2.156.825 3.38 3.38 0 00-5.77 3.084 9.61 9.61 0 01-6.97-3.53 3.38 3.38 0 001.05 4.51 3.37 3.37 0 01-1.535-.423v.043a3.38 3.38 0 002.713 3.316 3.4 3.4 0 01-1.53.058 3.38 3.38 0 003.158 2.348 6.79 6.79 0 01-4.203 1.447 6.63 6.63 0 01-.806-.047 9.55 9.55 0 005.177 1.52"
              />
            </svg>
          </a>

          <!-- YouTube -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>

          <!-- Twitter/X -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>

          <!-- 抖音 (第二个) -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.53 20c6.237 0 9.65-5.166 9.65-9.65 0-.15 0-.298-.01-.447A6.92 6.92 0 0024 7.764a6.79 6.79 0 01-1.95.535 3.4 3.4 0 001.495-1.88 6.83 6.83 0 01-2.156.825 3.38 3.38 0 00-5.77 3.084 9.61 9.61 0 01-6.97-3.53 3.38 3.38 0 001.05 4.51 3.37 3.37 0 01-1.535-.423v.043a3.38 3.38 0 002.713 3.316 3.4 3.4 0 01-1.53.058 3.38 3.38 0 003.158 2.348 6.79 6.79 0 01-4.203 1.447 6.63 6.63 0 01-.806-.047 9.55 9.55 0 005.177 1.52"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <div class="md:hidden mb-6">
        <ul class="flex justify-center space-x-4 text-[16px]">
          <li>
            <NuxtLink to="/" class="hover:text-gray-300 transition-colors">
              {{ $t('menu.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/product" class="hover:text-gray-300 transition-colors">
              {{ $t('menu.products') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers" class="hover:text-gray-300 transition-colors">
              {{ $t('menu.careers') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-gray-300 transition-colors">
              {{ $t('menu.about') }}
            </NuxtLink>
          </li>
          <li>
            <button
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="hover:text-gray-300 transition-colors"
            >
              {{ locale === 'zh' ? 'EN' : '中文' }}
            </button>
          </li>
        </ul>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-gray-800 mb-6"></div>

      <!-- 版权信息 -->
      <div class="text-center text-gray-500 text-[16px]">
        <p class="mb-2">Copyright © Astribot. All Rights Reserved.</p>
        <div
          class="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4"
        >
          <div class="flex items-center">
            <span>粤ICP备20253601号</span>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/images/footer/head-logo.png"
              alt="公安备案图标"
              class="w-[16px] mr-[5px]"
            />
            <span>粤公网安备44030002006488号</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppLink from '~/components/AppLink.vue'

const { locale, setLocale } = useI18n()
const changeLanguage = (locale) => {
  console.log('666666666666')
  setLocale(locale)
}
</script>
