/*
 * @Author: lijiahao
 * @Date: 2019-10-14 15:11:16
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-14 17:47:24
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var str = '['
var isValid = function(s) {
  var leftBrackets = ['{', '(', '['],
    rightBrackerts = ['}', ')', ']'],
    brackets = s.split(''),
    stack = [],
    i = 0
  while (i <= brackets.length) {
    if (leftBrackets.indexOf(brackets[i]) !== -1) {
      stack.push(brackets[i])
    }
    if (rightBrackerts.indexOf(brackets[i]) !== -1) {
      if (leftBrackets.indexOf(stack[stack.length - 1]) !== rightBrackerts.indexOf(brackets[i])) {
        return false
      } else {
        stack.pop()
      }
    }
    i++
  }
  if (stack.length > 0) {
    return false
  }
  return true
}
isValid(str)
