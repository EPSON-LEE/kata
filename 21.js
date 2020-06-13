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
  return merge(l1, l2)
}

const merge = (left, right) => {
  if(!left || !right) return (left? left:right)

  if (left.val < right.val){
      left.next = merge(left.next, right);
      return left;
  } else {
      right.next = merge(left, right.next);
      return right;
  }
}

// var mergeTwoLists = function(l1, l2) {
//   if(!l1 || !l2) return (l1? l1:l2)
  
//   if (l1.val < l2.val){
//       l1.next = merge(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = merge(l1, l2.next);
//       return l2;
//   }
// }