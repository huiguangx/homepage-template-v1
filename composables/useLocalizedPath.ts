// ~/composables/useLocalizedPath.ts
import { useI18n } from 'vue-i18n'

interface LocalizedPathOptions {
  defaultLocale?: string
  supportedLocales?: string[]
  alwaysPrefix?: boolean // 是否总是显示语言前缀（即使是默认语言）
  indexRouteName?: string // 首页的路由名称（用于特殊处理）
}

/**
 * 多语言路径处理组合式函数
 * @param options - 配置选项
 * @returns 包含路径处理方法的对象
 * @property {Function} stripLocalePrefix - 移除路径中的语言前缀
 * @property {Function} addLocalePrefix - 为路径添加语言前缀
 * @property {Function} shouldAddLocale - 判断路径是否需要添加语言前缀
 */
export const useLocalizedPath = (options: LocalizedPathOptions = {}) => {
  const { locale } = useI18n()
  const {
    defaultLocale = 'zh',
    supportedLocales = ['en', 'zh'],
    alwaysPrefix = false,
    indexRouteName = 'index',
  } = options

  // 移除语言前缀
  const stripLocalePrefix = (path: string): string => {
    // 处理类似 /zh 或 /zh/ 的情况
    if (path === `/${locale.value}` || path === `/${locale.value}/`) {
      return '/'
    }

    const pattern = new RegExp(`^/(${supportedLocales.join('|')})(/|$)`, 'i')
    return path.replace(pattern, '/').replace(/\/+/g, '/') || '/'
  }

  // 添加语言前缀（特殊处理首页）
  const addLocalePrefix = (path: string, targetLocale?: string): string => {
    const targetLang = targetLocale || locale.value
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    const normalizedPath = stripLocalePrefix(cleanPath)

    // 特殊处理首页
    if (normalizedPath === '/' || normalizedPath === `/${indexRouteName}`) {
      if (alwaysPrefix || targetLang !== defaultLocale) {
        return `/${targetLang}/${indexRouteName}`
      }
      return `/${indexRouteName}`
    }

    // 非首页情况
    if (alwaysPrefix || targetLang !== defaultLocale) {
      return `/${targetLang}${normalizedPath}`
    }
    return normalizedPath
  }

  // 判断路径是否需要语言前缀
  const shouldAddLocale = (path: string): boolean => {
    const currentLangPrefix = `/${locale.value}`
    return !(
      path.startsWith(currentLangPrefix) ||
      (!alwaysPrefix &&
        locale.value === defaultLocale &&
        !new RegExp(`^/(${supportedLocales.join('|')})(/|$)`).test(path))
    )
  }

  return { stripLocalePrefix, addLocalePrefix, shouldAddLocale }
}
