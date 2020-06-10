var searchInsert = function(nums, target) {
  if (target <= nums[0]) {
    return 0
  }
  for (let i = 0; i <= nums.length; i++) {
    if (i+1 === nums.length ) {
      return nums.length
    }
    if (nums[i] < target && target <= nums[i+1]) {
      return i + 1
    }
  }
}
// 解法 2 二分法