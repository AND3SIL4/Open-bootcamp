function fibonacci(num) {
  let array = []
  for (let i = 0; i <= num; i++){
    if (i <= 1) {
      array = [...array, 1]
    } else {
      const numero = array[i - 1] + array[i - 2]
      array = [...array, numero]
    }
  }
  return array
}
console.log(fibonacci(6));