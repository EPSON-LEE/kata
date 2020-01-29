/*
 * @Author: lijiahao
 * @Date: 2019-10-10 14:05:37
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-11 12:03:25
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
var l1 = null
var l2 = null

l1 = new ListNode(1)

l2 = new ListNode(9)
l2.next = new ListNode(9)

var addTwoNumbers = function (l1, l2) {
  var value1,
    value2,
    sum,
    carryOutFlag = 0,
    head = new ListNode(0),
    cur = null
  while (l1 || l2 || carryOutFlag) {
    value1 = l1 && l1.val ? l1.val : 0
    value2 = l2 && l2.val ? l2.val : 0
    console.log('value1', value1)
    console.log('value2', value2)
    // 得到的值s
    sum = (value1 + value2 + carryOutFlag) % 10
    // 进位标记
    carryOutFlag = Math.floor((value1 + value2 + carryOutFlag) / 10)

    if (!Number.isNaN(sum)) {
      if (!cur) {
        cur = head
      }
      var temp = new ListNode(sum)
      cur.next = temp
      cur = temp
    }

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  console.log(head.next)
  return head.next
}
addTwoNumbers(l1, l2)
