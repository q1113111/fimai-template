import { onMounted, onBeforeUnmount, nextTick, onUnmounted } from 'vue'
export function dateFormat (t, format) { // t 为毫秒， format 为格式
  const date = new Date(t)
  const tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(date.getFullYear())
      case 'MM':
        return tf(date.getMonth() + 1)
      case 'mm':
        return tf(date.getMinutes())
      case 'dd':
        return tf(date.getDate())
      case 'HH':
        return tf(date.getHours())
      case 'ss':
        return tf(date.getSeconds())
    }
  })
}

// formData轉換
export const changeFormData = (payload) => {
  const formData = new FormData()
  const entiresData = Object.entries(payload)
  for (const item of entiresData) {
    if (item[1] === undefined || item[1] === null || item[1] === '') continue
    formData.append(item[0], item[1])
  }
  return formData
}
// 一般param空值忽略
export const paramIgnore = (param) => {
  const newParam = {}
  for (const item in param) {
    if (param[item] === '' || param[item] === undefined || param[item] === null) continue
    newParam[item] = param[item]
  }
  return newParam
}

/**
 * @description 過濾重複的資料
 * @param {array} data
 * @param {string} key
 * @return {array}
 */
export const filterRepeat = (data, key) => {
  const set = new Set()
  return data.filter(item => !set.has(item[key]) ? set.add(item[key]) : false)
}
