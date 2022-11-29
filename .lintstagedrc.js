import { ESLint } from 'eslint'
/**
 * 去除暂存区文件中被 eslint 设置为忽略的文件
 * @param {string[]} files 暂存区的文件名数组
 * @returns 去除忽略的暂存区文件名数组
 */
const removeIgnoredFiles = async (files) => {
  // eslint >= 7 后使用此 API
  const eslint = new ESLint()
  // 获取是否被忽略的 boolean 数组
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  // 根据 isIgnored 数组过滤文件
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

// 导出 lint-staged 的配置
export default {
  // 对于 js 或者 ts 文件使用 eslint 进行审查
  'src/**/*.{js,jsx,ts,tsx,vue}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`prettier --write ${filesToLint}`,`eslint --max-warnings=0 ${filesToLint}`]
  },
  // 对于 样式 json md html yaml 使用 prettier 进行格式化并直接覆盖文件
  '*.{css,scss,json,md,html,yml}': ['prettier --write'],
}
