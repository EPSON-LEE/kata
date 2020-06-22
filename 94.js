class BiTree {
  constructor(val, left, right) {
    this.left = left
    this.right = right
    this.val = val
  }
}

var F = new BiTree('F', null, null)
var E = new BiTree('E', null, null)
var D = new BiTree('D', null, null)
var B = new BiTree('B', D, null)
var C = new BiTree('C', E, F)
var A = new BiTree('A', B, C)

const inorderTraversal = (root) => {

  const stack = [], ret = []

  while (root || stack.length) {

    if (root) {

        stack.push(root)
        root = root.left

    } else {

      root = stack.pop()
      root && ret.push(root.val)
      root = root.right
      
    }
  }
  return ret
}

inorderTraversal(A)

var inorderTraversal = (root) => {
  let arr = []
  traverse(root, arr)
  return arr
};

const traverse = (root, arr) => {
    if (!root) return
    traverse(root.left, arr)
    arr.push(root.val)
    traverse(root.right, arr)
}