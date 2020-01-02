/*
 * @Author: lijiahao
 * @Date: 2019-10-14 14:17:46
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-14 14:54:40
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var result =
    parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * (x >= 0 ? 1 : -1)
  if (result >= Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0
  }
  return result
}

// 铺平多维数组

var arr = [1, 2, 3, 4, [12, 343, [32, 32, 32, 43, 5454], [12, 12, 12]], [2121, 212121, [212, 1212, [2121, 221, [212, [2121]]]]]]
arr.flat(Infinity)

//
// reduce
