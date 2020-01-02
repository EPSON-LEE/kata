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
  var len = 1,
      arr = [],
      newHead = null,
      tempHead = null
  
  while (head !== null) {
    len++
    arr.push(head.val)
    head = head.next
  }

  arr.splice(len - n - 1, 1)

  arr.forEach((item, index) => {
    const tempPtr = new ListNode(item)
    if (index === 0) {
      newHead = tempHead = tempPtr
    } else {
      tempHead.next = tempPtr
      tempHead = tempHead.next
    }
  })

  return newHead
};

// var removeNthFromEnd = function(head, n) {
//   var left, before, right = head;
//   left = before = {next: head}; 
//   while (n--) right = right.next;
//   while (right) {
//     right = right.next;
//     left = left.next;
//   }
//   left.next = left.next.next;
//   return before.next;
// };