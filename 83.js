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
head.next = new ListNode(1)
head.next.next = new ListNode(1)

var deleteDuplicates = function(head) {
  var newHead = head
  while(head && head.next) {
    if(head.val === head.next.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }    
  return newHead
};
deleteDuplicates(head)