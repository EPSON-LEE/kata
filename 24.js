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
var swapPairs = function (head) {
  var p = head,
    q = null,
    t = null

  if (!head || !head.next) {
    return head
  } else {
    q = head.next
  }


  while (p && q && p.next) {
    p.next = q.next
    q.next = p
    if (t) {
      t.next = q
    } else {
      head = q
    }
    t = p
    p = t.next
    if (p) {
      q = p.next
    }
  }

  return head
};
