function timeFormat(options) {
  let time = options.time ? options.time : new Date()
  let template = options.template
    ? options.template
    : '{0}年{1}月{2}日 {3}时{4}分{5}秒'
  let arr = [
    time.getFullYear(),
    zero(time.getMonth() + 1),
    zero(time.getDate()),
    zero(time.getHours()),
    zero(time.getMinutes()),
    zero(time.getSeconds()),
  ]
  return template.replace(/\{(\d)\}/g, (...[, capture]) => {
    return arr[capture] || '00'
  })

  function zero(num) {
    return num < 10 ? '0' + num : num
  }
}

export { timeFormat }
