const locales = [
  {
    code: 'en',
    iso: 'en',
    file: 'en.json',
    name: 'English',
    language: 'en-US',
  },
  {
    code: 'zh',
    iso: 'zh',
    file: 'zh.json',
    name: '简体中文',
    language: 'zh-CN',
  },
  // {
  //   code: 'ja',
  //   file: 'ja.json',
  //   name: '日本語'
  // },
  // {
  //   code: 'ko',
  //   file: 'ko.json',
  //   name: '한국어'
  // },
  // {
  //   code: 'fr',
  //   file: 'fr.json',
  //   name: 'Français'
  // }
]

export const currentLocales = locales
export const currentLocaleCodes = locales.map((l) => l.code)
