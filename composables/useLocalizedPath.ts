import { useI18n } from 'vue-i18n'

export const useLocalizedPath = () => {
  const { locale } = useI18n()

  // 移除所有语言前缀
  const stripLocalePrefix = (path: string): string => {
    return path.replace(/^\/[a-z]{2}(\/|$)/, '/').replace(/\/+/g, '/') || '/'
  }

  // 添加当前语言前缀
  const addLocalePrefix = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    const normalizedPath = stripLocalePrefix(cleanPath)

    // 默认语言不加前缀
    if (locale.value === 'en') return normalizedPath

    // 其他语言加前缀
    return `/${locale.value}${normalizedPath === '/' ? '' : normalizedPath}`
  }

  // 检查路径是否需要添加前缀
  const shouldAddLocale = (path: string): boolean => {
    const currentLangPrefix = `/${locale.value}`
    return !(
      path.startsWith(currentLangPrefix) ||
      (locale.value === 'en' && !/^\/[a-z]{2}(\/|$)/.test(path))
    )
  }

  return {
    stripLocalePrefix,
    addLocalePrefix,
    shouldAddLocale,
  }
}
