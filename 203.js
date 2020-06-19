const removeElements = (head, val) => {
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = (head, val) => {
  if (!head) return head
  if (head.val === val && !head.next) return head.next

  let slow = { next: head }
  let fast = head

  while (fast) {
    if (fast.val === val) {
      slow.next = fast.next
      fast = slow.next
    } else {
      slow = slow.next
      fast = fast.next
    }
  }

  return slow
}
