function addNums(n1: number, n2: number) {
  return n1 + n2
}

function printResults(num: number) {
  console.log('Result: ' + num)
}

printResults(addNums(5, 12))

// let someValue = undefined

let combineValuses: (a: number, b: number) => number

combineValuses = addNums
// combineValuses = printResults

console.log(combineValuses(8, 8))
