// 13 sum

var removeDuplicates = function(nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i+1] === nums[i] ) {
      nums.splice(i+1, 1)
      i--
    }
    i++
  }
}