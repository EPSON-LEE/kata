const binarySearch = (arr, val) => {
  let low = 0,
      high = arr.length - 1
  while (height > low) {
    let mid = low + ((height - low) >> 1)
    if (arr[mid] > val) {
      high = mid - 1 
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      return mid
    }
  }
}