/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const inTreverse = (root, arr) => {
    
  if (!root) return
  arr.push(root.val)
  inTreverse(root.left, arr)
  inTreverse(root.right, arr)
    
}

const getAllElements = (root1, root2) => {

  let arr1 = [], arr2 = [], ret = [], id1 = 0, id2 = 0

  inTreverse(root1, arr1)
  inTreverse(root2, arr2)

  while (id1 < arr1.length && id2 < arr2.length) {
    arr1[id1] < arr2[id2] ? ret.push(arr1[id1++]) : ret.push(arr2[id2++])
  }

  while (id1 < arr1.length) ret.push(arr1[id1++])
  while (id2 < arr2.length) ret.push(arr2[id2++])

  return ret
    
}