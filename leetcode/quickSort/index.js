/**
 * 1. 选第一个作为 pivot
 * 2. 选最后一个作为 pivot
 * 3. 选择随机数作为 pivot
 * 4. 选中值作为 pivot
 * 
 * Thinking: partition
 * 基础款
 */

 let quickSort = (arr, low, high) => {
   if (low < high) {
     /* pi is partitioning index, arr[pi] is now at right place */
     pi = partition(arr, low, high)

     quickSort(arr, low, pi - 1) // Before Pi
     quickSort(arr, pi - 1, high) // After Pi
   }
 }

 let partition = (arr, low, high) => {

   let pivot = arr[high]
   let i = low - 1

  for (j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++
      swap(arr[i], arr[j])
    }
  }
  swap(arr[i + 1], arr[high])
  return i + 1
 }