// ~/composables/useLanguageSwitch.ts
import { useI18n } from 'vue-i18n'
import { useRoute, navigateTo } from '#imports'
import { useLocalizedPath } from './useLocalizedPath'
// import { debounce } from 'lodash-es'

interface LanguageSwitchOptions {
  defaultLocale?: string
  supportedLocales?: string[]
  routeSyncStrategy?: 'immediate' | 'debounced' | 'manual'
  alwaysPrefix?: boolean
  indexRouteName?: string
}

export function useLanguageSwitch(options: LanguageSwitchOptions = {}) {
  const {
    defaultLocale = 'zh',
    supportedLocales = ['en', 'zh'],
    routeSyncStrategy = 'immediate',
    alwaysPrefix = false,
    indexRouteName = 'index',
  } = options

  const { locale, setLocale } = useI18n()
  const route = useRoute()
  const { stripLocalePrefix, addLocalePrefix } = useLocalizedPath({
    defaultLocale,
    supportedLocales,
    alwaysPrefix,
    indexRouteName,
  })

  const detectLanguageFromPath = (path: string): string => {
    const matchedLocale = supportedLocales.find(
      (lang) =>
        path.startsWith(`/${lang}`) ||
        path.startsWith(`/${lang.toLowerCase()}`) ||
        path.startsWith(`/${lang.split('-')[0]}`),
    )
    return matchedLocale || defaultLocale
  }

  const syncLocaleWithRoute = () => {
    const targetLang = detectLanguageFromPath(route.path)
    if (locale.value !== targetLang) {
      setLocale(targetLang)
    }
  }

  const switchLanguage = async (newLang: string) => {
    if (!supportedLocales.includes(newLang)) {
      console.warn(`Unsupported locale: ${newLang}. Falling back to ${defaultLocale}`)
      newLang = defaultLocale
    }

    if (locale.value === newLang) return

    const normalizedPath = stripLocalePrefix(route.path)
    let newPath: string

    // 特殊处理首页路由
    if (normalizedPath === '/' || normalizedPath === `/${indexRouteName}`) {
      newPath = addLocalePrefix(`/${indexRouteName}`, newLang)
    } else {
      newPath =
        newLang === defaultLocale && !alwaysPrefix
          ? normalizedPath
          : `/${newLang}${normalizedPath === '/' ? '' : normalizedPath}`
    }

    try {
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
      window.location.href = newPath
    }
  }

  // 初始化逻辑
  if (routeSyncStrategy !== 'manual') {
    syncLocaleWithRoute()
  }

  if (routeSyncStrategy !== 'manual') {
    watch(
      () => route.path,
      routeSyncStrategy === 'debounced' ? debounce(syncLocaleWithRoute, 100) : syncLocaleWithRoute,
      { immediate: routeSyncStrategy === 'immediate' },
    )
  }

  return {
    switchLanguage,
    currentLanguage: computed(() => locale.value),
    supportedLanguages: supportedLocales,
    isSupportedLanguage: (lang: string) => supportedLocales.includes(lang),
    addLocalePrefix,
    stripLocalePrefix,
  }
}
