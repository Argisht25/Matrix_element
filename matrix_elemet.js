function solo(matrix) {
    let arr = matrix[0]
    let arr1 = matrix[1]
    let arr2 = matrix[2]
    let value = 0
    for (let i = 0; i < matrix[0].length; i++) {
       if (arr[i] !== 0) {
          value += arr[i]
          if (arr1[i] !== 0) {
             value += arr1[i]
             if (val2[i] !== 0) {
                value += arr2[i]
             }
          }
       }
    }
    return value
 }