/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

var l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = new ListNode(3)
l2.next.next.next = new ListNode(4)
l2.next.next.next.next = new ListNode(5)


var reverseBetween = function (head, m, n) {
  var cur = head,
    index = 0;

  if (n >= m && m >= 1) {
    while (cur) {
      index++

    }
  }
  return head
};

debugger
reverseBetween(l2, 2, 4)