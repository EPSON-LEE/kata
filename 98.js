class BiTree {
  constructor(val, left, right) {
    this.left = left
    this.right = right
    this.val = val
  }
}

var B1 = new BiTree(1, null, null)
var B3 = new BiTree(3, null, null)
var B6 = new BiTree(6, null, null)
var B4 = new BiTree(4, B3, B6)
var B5 = new BiTree(5, B1, B4)

var isValidBST = function(root) {
  return (preOrderTraverse(root) === null || preOrderTraverse(root)) ? true : false
}

const preOrderTraverse = (root) => {
  if (!root) return true
  if (
      root.left && (root.left.val > root.val) ||
      root.right && (root.right.val < root.val)
    ) return false
  preOrderTraverse(root.left)
  preOrderTraverse(root.right)
}

isValidBST(B5)