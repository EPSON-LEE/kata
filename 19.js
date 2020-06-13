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
/**
 * 第一种方法： 计算链表长度，遍历链表分析位置和 n 的关系
 */
const countLength = (head) => {
  let length = 1
  while (head.next) {
    length++
    head = head.next
  }
  return length
}

var removeNthFromEnd = function(head, n) {
  const length = countLength(head)
  let Header = new ListNode(null),
      pre = null,
      cur = head,
      flag = 0
  Header.next = head
  pre = Header

  while (cur != null) {
    if (n - 1 === length) {
        return  Header.next
    } 
    if (n + flag === length) {
        pre.next = cur.next
        return Header.next || null
    }
    flag++
    pre = cur
    cur = cur.next
  }
}
/**
 * 第二种方法： 快慢指针
 */

 const removeNthFromEnd = (head, n) => {
   let fast = head
   let slow = head
   while (n-- !== 0) {
     fast = fast.next
   }
   while (fast && fast.next !== null) {
     fast = fast.next
     slow = slow.next
   }
  //  关注 edge case 当 n 和 数组长度相等时 需要移除第一个元素
   if (!fast) {
     head = head.next
   } else {
     slow.next = slow.next ? slow.next.next : null
   }
   return head
 }