/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let arr = [],
      header = null,
      tempPtr

  while(l1) {
    arr.push(l1.val)
    l1 = l1.next
  }

  while(l2) {
    arr.push(l2.val)
    l2 = l2.next
  }


  arr.sort((a, b) => a - b).forEach((item, index) => {
    const tempNode = new ListNode(item)
    if (index === 0) {
      header = tempPtr = tempNode
    } else {
      tempPtr.next = tempNode
      tempPtr = tempPtr.next
    }
  })

  return header
};