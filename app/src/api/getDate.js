
export default function getNowFormatDate (d, m) {
  const date = new Date()
  const seperator1 = '-'
  const seperator2 = ':'
  let strDate
  if (d) {
    strDate = date.getDate() - d
  } else {
    strDate = date.getDate()
  }
  let month
  if (m) {
    month = date.getMonth() + 1 - m
  } else {
    month = date.getMonth() + 1
  }
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
  ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  return currentdate
}
