// // ~/composables/useLanguageSwitch.ts
// import { useI18n } from 'vue-i18n'
// import { useRouter } from 'vue-router'

// export function useLanguageSwitch() {
//   const { locale } = useI18n()
//   const router = useRouter()

//   const switchLanguage = (newLang: 'en' | 'zh') => {
//     // 获取当前路由（去除可能存在的语言前缀）
//     const currentRoute = router.currentRoute.value
//     const pathWithoutLocale = currentRoute.path.replace(/^\/[a-z]{2}\//, '/')

//     // 更新 locale
//     locale.value = newLang

//     // 计算新路径（默认语言不加前缀）
//     const newPath = newLang === 'en' ? pathWithoutLocale : `/${newLang}${pathWithoutLocale}`

//     // 保留查询参数和 hash
//     router.replace({
//       path: newPath,
//       query: currentRoute.query,
//       hash: currentRoute.hash,
//     })
//   }

//   return { switchLanguage }
// }
// ~/composables/useLanguageSwitch.ts
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { navigateTo } from '#imports'

type AppLanguage = 'en' | 'zh'

export function useLanguageSwitch() {
  const { locale, setLocale } = useI18n()
  const router = useRouter()
  const route = useRoute()

  // 获取标准化路径（不含语言前缀）
  const getNormalizedPath = () => {
    const path = route.path.replace(/^\/zh/, '').replace(/\/+/g, '/') || '/'
    return path === '/zh' ? '/' : path // 处理/zh特殊情况
  }

  // 同步i18n与路由状态
  const syncLocaleWithRoute = () => {
    const shouldBeZh = route.path.startsWith('/zh') || route.path === '/zh'
    if (shouldBeZh && locale.value !== 'zh') {
      setLocale('zh')
    } else if (!shouldBeZh && locale.value !== 'en') {
      setLocale('en')
    }
  }

  // 语言切换核心逻辑
  const switchLanguage = async (newLang: AppLanguage) => {
    if (locale.value === newLang) return

    const normalizedPath = getNormalizedPath()
    const newPath =
      newLang === 'zh' ? `/zh${normalizedPath === '/' ? '' : normalizedPath}` : normalizedPath

    try {
      // 原子操作：先更新路由，再更新i18n
      await navigateTo({
        path: newPath,
        query: route.query,
        hash: route.hash,
      })
      await setLocale(newLang)
    } catch (error) {
      console.error('Language switch failed, reloading...', error)
      window.location.assign(newPath)
    }
  }

  // 初始化同步 & 路由变化监听
  syncLocaleWithRoute()
  watch(() => route.path, syncLocaleWithRoute)

  return {
    switchLanguage,
    currentLanguage: computed(() => locale.value as AppLanguage),
  }
}
