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

const preOrderTreverse = (biTree) => {
  if (biTree === null) return
  console.log(biTree.val)
  preOrderTreverse(bitree.left)
  preOrderTreverse(bitree.right)
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

// 深度优先



// 广度优先 队列 + 二叉树 通过队列长度来控制循环

const layerTreverse = (biTree) => {

  var queue = []
  queue.push(biTree)

  while (queue.length) {
    debugger
    var node = queue.shift()
    console.log(node.val)
    node.left !== null && queue.push(node.left)
    node.right !== null && queue.push(node.right)
  }
}

layerTreverse(A)

// 反转二叉树


