/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const header = head
  const countLength = (head) => {
    let length = 1
    while (head.next) {
      length++
      head = head.next
    }
    return length
  }
  const length = countLength(head)

  if (n === length) return null

  let flag = 0
  if (length - n  > flag && head.next) {
    head = head.next
  }

  header.next.next ? header.next = header.next.next :  header.next = null
  return header
}