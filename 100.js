
var isSameTree = function(p, q) {
  let arrP = [], arrQ = []
  
  inOrderTraverse(p, arrP)
  inOrderTraverse(q, arrQ)

  return arrP.toString() === arrQ.toString()
}

const inOrderTraverse = (p, arr) => {
  if (!p) {
    arr.push(null)
    return true
  }
  arr.push(p.val)
  inOrderTraverse(p.left, arr)
  inOrderTraverse(p.right, arr)
}

isSameTree(F, E)