//  Container With Most Water

/**
 * Brute Force
 * @param {*} height 
 */
var maxArea = function (height) {
  let max = 0
  const len = height.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const result = (j - i) * Math.min(height[i], height[j])
      max = Math.max(max, result)
    }
  }
  return max
}

/**
 * 2 Pointer Approach 最优化剪枝
 */

var maxArea = function (height) {
  const len = height.length
  let max = (len - 1) * Math.min(height[1], height[len - 1]),
      left = 1,
      right = len
  while (left < right) {
    result = (right - left) * Math.min(height[left], height[right])
    if (height[left] >= height[right]) {
      right = right - 1
    } else {
      left = left + 1
    }
  }
}