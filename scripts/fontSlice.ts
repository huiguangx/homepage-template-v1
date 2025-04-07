const path = require('path')
const createFontSlice = require('font-slice')

createFontSlice({
  // fontPath
  fontPath: path.resolve(__dirname, 'YourPath.ttf'),
  // outputDir
  outputDir: path.resolve(__dirname, './output'),
  fontFamily: 'HarmonyOS_SansSC',
  // 是否需要在生成完成后打开预览页面，默认为 true，如果为 false 不会生成 index.html 及启动服务器
  preview: false,
})
