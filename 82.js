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
var deleteDuplicates = function(head) {
  var tempNode = head,
      arr = []
  while(tempNode) {
    arr.push(tempNode.val)
    tempNode = tempNode.next
  }
    head = null
  arr.forEach((item) => {
    if (arr.filter(ele => ele === item).length === 1) {
        if (!tempNode) {
          head = tempNode = new ListNode(item)
        } else {
            tempNode.next = new ListNode(item)
            tempNode = tempNode.next
        }
        
    }
  })
  return head
};

var deleteDuplicates = function(head) {
  if(!head) return head
  if(!head.next) return head
  let set = false
  while(head.val === head.next.val){
      set = true
      head = head.next
      if(!head) return head
      if(!head.next) break
  }
  head.next = deleteDuplicates(head.next)
  return set ? head.next : head
};