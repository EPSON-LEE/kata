// 构建一个二叉树

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

console.log(A)

// 三种递归遍历方式

// 前序遍历 递归

const preOrderTreverse = (biTree) => {
  if (biTree === null) return
  console.log(biTree.val)
  preOrderTreverse(bitree.left)
  preOrderTreverse(bitree.right)
}

// 前序遍历非递归

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

const inOrderTreverse = (biTree) => {
  if (biTree === null) return 
  inOrderTreverse(biTree.left)
  console.log(biTree.val)
  inOrderTreverse(biTree.right) 
}

const postOrderTreverse = (biTree) => {
  if (biTree === null) return
  inOrderTreverse(biTree.left)
  inOrderTreverse(biTree.right) 
  console.log(biTree.val)
}

// 非递归遍历


// 深度优先非递归 堆栈 + 二叉树 通过队列长度来控制循环

const depthTreverse = (biTree) => {

  var stack = [], temp
  stack.push(biTree)

  while (stack.length) {
    temp = stack.pop()
    console.log(temp.val)
    temp.left !== null && stack.push(temp.left)
    temp.right !== null && stack.push(temp.right)    
  }
}

// 广度优先非递归 队列 + 二叉树 通过队列长度来控制循环

const layerTreverse = (biTree) => {

  var queue = []
  queue.push(biTree)

  while (queue.length) {
    var node = queue.shift()
    console.log(node.val)
    node.left !== null && queue.push(node.left)
    node.right !== null && queue.push(node.right)
  }
}

layerTreverse(A)


const layerTreverse = (biTree) => {

  let queue = [], temp
  queue.push(biTree)

  while (queue.length) {
    temp = queue.shift()
    console.log(temp.val)
    temp.left !== null && queue.push(temp.left)
    temp.right !== null && queue.push(temp.right)
  }
}

// 求二叉树深度

const f = (node) => {
  if (!node) return 0
  return Math.max(f(node.left), f(node.right)) + 1
}

const maxDeptch = (root) => {
  return f(root)
}

// 反转二叉树


