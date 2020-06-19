/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function(head) {
  let n = 0
  let sum = 0
  while (head) {
    sum++
    if (head.flag) {
      while (head) {
        n++
        head.flag2 = true     
        head = head.next   
        if (head.flag2) {
          return sum - n
        }     
      }
    }
    head = head.next
    head.flag = true
  }
  console.log(sum)
  return -1
}