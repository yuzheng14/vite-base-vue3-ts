/**
 * 传入参数（函数），将报告的结果传入该参数执行
 * @param {function} onPerfEntry 用于报告性能测试的函数
 */
const reportWebVitals = (onPerfEntry: () => void) => {
  // 如果参数存在并且是函数
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 懒加载并获取到五种性能指标，调用报告性能测试结果的函数
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
