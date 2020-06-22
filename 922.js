var sortArrayByParityII = function(A) {
  var oldArr = []
  var evenArr = []
  var arr = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 !== 0) {
      evenArr.push(A[i])
    } else {
      oldArr.push(A[i])
    }
  }   
  var length = oldArr.length
  for (let j = 0; j < length; j++) {
    arr.push(oldArr.splice(0, 1))
    arr.push(evenArr.splice(0, 1))
  }
  return arr
};