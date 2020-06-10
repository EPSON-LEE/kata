// Remove Element

var removeElement = function(nums, val) {
  while (nums.findIndex(item => item === val)) {
    nums.splice(nums.findIndex(item => item === val), 1)
  }
  return nums
}