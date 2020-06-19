
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let l = new ListNode(1)
l.next = new ListNode(2)

const reverseList  = (head) => {
  let p = head, q = p.next, r = q

  p.next = null

  while (q !== null) {
    r = q.next
    q.next = p
    p = q
    q = r
  }

  return p
}


reverseList(l)

var reverseList = function(head) {
  let [prev, current] = [null, head]
  while(current) {
      [current.next, prev, current] = [prev, current, current.next]
  }
  return prev
}