/*
 * @Author: lijiahao
 * @Date: 2019-10-14 11:49:07
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-14 12:12:56
 */

// 最大不重复字串的数量

function getLongestStringNum(s) {
  // 记录字符串的位置
  var doc = new Map()
  var j = -1 // j 为当前位置
  var maxSubString = 0
  for (let i = 0; i < s.length; i++) {
    if (doc.has(s[i])) {
      j = Math.max(doc.get(s[i]), j)
    }
    doc.set(s[i], i)
    maxSubString = Math.max(maxSubString, i - j)
  }
  return maxSubString
}
