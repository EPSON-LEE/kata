/*
 * @Author: lijiahao
 * @Date: 2019-10-11 14:12:51
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-11 14:30:42
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
arr = [1, 2, 2, 1, 1, 3]

var uniqueOccurrences = function(arr) {
  var obj = {}
  for (let item of arr) {
    var len = arr.filter(elem => elem === item).length
    if (obj[len] && obj[len] !== item) {
      return false
    }
    obj[len] = item
  }
  return true
}

uniqueOccurrences(arr)
