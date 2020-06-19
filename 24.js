/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {

  if (head || head.next) return head

  let p = head.next
  head.next = p.next
  p.next = head
  head.next = swapPairs(head.next)
  return p
}
