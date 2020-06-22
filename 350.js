function intersect(nums1 , nums2){
  let setNum1 = new Set(nums1);

  return [...(nums2.filter(num => setNum1.has(num)))];
}