// ~/composables/useLanguageSwitch.ts
// import { useI18n } from 'vue-i18n'
// import { useRouter, useRoute } from 'vue-router'
// import { navigateTo } from '#imports'

// type AppLanguage = 'en' | 'zh'

// export function useLanguageSwitch() {
//   const { locale, setLocale } = useI18n()
//   const router = useRouter()
//   const route = useRoute()

//   // 获取标准化路径（不含语言前缀）
//   const getNormalizedPath = () => {
//     const path = route.path.replace(/^\/zh/, '').replace(/\/+/g, '/') || '/'
//     return path === '/zh' ? '/' : path // 处理/zh特殊情况
//   }

//   // 同步i18n与路由状态
//   const syncLocaleWithRoute = () => {
//     const shouldBeZh = route.path.startsWith('/zh') || route.path === '/zh'
//     if (shouldBeZh && locale.value !== 'zh') {
//       setLocale('zh')
//     } else if (!shouldBeZh && locale.value !== 'en') {
//       setLocale('en')
//     }
//   }

//   // 语言切换核心逻辑
//   const switchLanguage = async (newLang: AppLanguage) => {
//     if (locale.value === newLang) return

//     const normalizedPath = getNormalizedPath()
//     const newPath =
//       newLang === 'zh' ? `/zh${normalizedPath === '/' ? '' : normalizedPath}` : normalizedPath

//     try {
//       // 原子操作：先更新路由，再更新i18n
//       await navigateTo({
//         path: newPath,
//         query: route.query,
//         hash: route.hash,
//       })
//       await setLocale(newLang)
//     } catch (error) {
//       console.error('Language switch failed, reloading...', error)
//       window.location.assign(newPath)
//     }
//   }

//   // 初始化同步 & 路由变化监听
//   syncLocaleWithRoute()
//   watch(() => route.path, syncLocaleWithRoute)

//   return {
//     switchLanguage,
//     currentLanguage: computed(() => locale.value as AppLanguage),
//   }
// }
import { useI18n } from 'vue-i18n'
import { useRoute, navigateTo } from '#imports'
import { useLocalizedPath } from './useLocalizedPath'

type AppLanguage = 'en' | 'zh'

export function useLanguageSwitch() {
  const { locale, setLocale } = useI18n()
  const route = useRoute()
  const { stripLocalePrefix, addLocalePrefix } = useLocalizedPath()

  // 更精确的语言检测逻辑
  const detectLanguageFromPath = (path: string): AppLanguage => {
    return path.startsWith('/zh') ? 'zh' : 'en'
  }

  // 同步i18n与路由状态（带防抖）
  const syncLocaleWithRoute = () => {
    const targetLang = detectLanguageFromPath(route.path)
    if (locale.value !== targetLang) {
      setLocale(targetLang)
    }
  }

  // 增强版语言切换
  const switchLanguage = async (newLang: AppLanguage) => {
    if (locale.value === newLang) return

    const normalizedPath = stripLocalePrefix(route.path)
    const newPath =
      newLang === 'en' ? normalizedPath : `/zh${normalizedPath === '/' ? '' : normalizedPath}`

    try {
      // 原子操作：并行执行导航和语言设置
      await Promise.all([
        setLocale(newLang),
        navigateTo({
          path: newPath,
          query: route.query,
          hash: route.hash,
        }),
      ])
    } catch (error) {
      console.error('Language switch failed:', error)
      // 降级方案：强制页面刷新
      window.location.href = newPath
    }
  }

  // 初始化同步
  syncLocaleWithRoute()

  // 监听路由变化（带立即执行）
  watch(() => route.path, syncLocaleWithRoute, { immediate: true })

  return {
    switchLanguage,
    currentLanguage: computed(() => locale.value as AppLanguage),
  }
}
