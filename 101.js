var isSymmetric = function(root) {
  const arrLeft = [], arrRight = []
  inOrderTraverse(root.left, arrLeft)
  inOrderTraverse(root.right, arrRight)
  return arrLeft.toString() === arrRight.toString()
}

const inOrderTraverse = (root, arr) => {
  if (!root) {
    arr.push(null)
    return
  }
  inOrderTraverse(root.left, arr)
  arr.push(root.val)
  inOrderTraverse(root.right, arr)
}