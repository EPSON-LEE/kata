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
function ListNode(val) {
  this.val = val
  this.next = null
}

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

var swapPairs = function(head) {
  var p = head,
      q = null,
      t = null

  if (!head || !head.next) {
    return head
  } else {
   q = head.next
  }


   while (p && q && p.next) {
     debugger
     p.next = q.next
     q.next = p
     if (t) {
       t.next = q
     } else {
       head = q
     }
     t = p
     p = t.next
     q = p.next
   }

   return head
};

swapPairs(head)

// https://leetcode.com/problems/swap-nodes-in-pairs/

var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const nextHead = head.next.next;
  const swapHead = head.next;
  swapHead.next = head;
  head.next = swapPairs(nextHead);
  return swapHead;
};
// https://juejin.im/post/5958bac35188250d892f5c91#heading-7