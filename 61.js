/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function(head, k) {
//   const arr = []

//   // linkedList ->  
//   while (head) {
//     arr.push(head.val)
//     head = head.next
//   }

//   while(k--) {
//     arr.shift()
//   }
// };

  
//  method - 1 取余

var rotateRight = function(head, k) {
  let step, 
      count = 1,
      tempHead = head
  
  if (!tempHead || k === 0) {
    return head
  }

  while (tempHead.next) {
    count++
    tempHead = tempHead.next
  }

  tempHead.next = head
  step = count -  k % count

  while (step) {
    tempHead = head
    head = head.next
    step--
  }
  tempHead.next = null
  return head
};

rotateRight(head, 2)
rotateRight(head2, 1)
