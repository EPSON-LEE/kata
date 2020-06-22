/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = []
  const arrMax = nums1.length > nums2.length ? nums2 : nums1
  const arrMin = nums1.length > nums2.length ? nums2 : nums1
  arrMin.forEach(item => {
      if (arrMin.indexOf(item) !== -1) {
          result.push(item)
      }
  })
  return Array.from(new Set(result))
};

var intersection = function(nums1, nums2) {
  const arrMax = nums1.length > nums2.length ? nums1 : nums2
  const arrMin = nums1.length > nums2.length ? nums2 : nums1
  let arr = []
  for (let i = 0; i < arrMin.length; i++) {
    if (arrMax.includes(arrMin[i])) {
      arr.push(arrMax)
    }
  }
  return Array.from(new Set(arr))
}

function intersect(nums1 , nums2){
  let setNum1 = new Set(nums1);

  return [...new Set(nums2.filter(num => setNum1.has(num)))];
}


nums1 = [4,9,5]
nums2 = [9,4,9,4,8]

var intersect = function(nums1, nums2) {
    
  let [arrMax, arrMin] = nums1.length >= nums2.length ? [nums1, nums2] : [nums2, nums1]
  
  return arrMin.map(item => {
    if (arrMax.indexOf(item) !== -1) {
      arrMax.splice(arrMax.indexOf(item), 1)
      return item
    }
  }).filter(item => item !== undefined)
}

intersect(nums1, nums2)