/*
 * @Author: lijiahao
 * @Date: 2019-10-19 23:20:38
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-20 00:18:43
 */
var towSum = function(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    var position = arr.indexOf(target - arr[i])
    if (position !== -1 && position !== i) {
      return i >= position ? [position, i] : [i, position]
    }
  }
}

var towSum = function(arr, target) {
  const map = new Map()
  for (let i = 0; i <= arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i]
    }
    map.set(arr[i], i)
  }
}

var towSum = function(arr, target) {
  const set = new Set()
  for (let i = 0; i <= arr.length; i++) {
    if (set.has(target - arr[i])) {
      return [set.get(target - arr[i]), i]
    }
    set.add(arr[i], i)
  }
}
