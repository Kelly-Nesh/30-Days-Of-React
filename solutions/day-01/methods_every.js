// similar to some but every item must satisfy the criteria

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const allAreEven = numbers.every((n) => n % 2 === 0)
const allAreOdd = numbers.every((n) => n % 2 !== 0)

console.log(allAreEven) // false
console.log(allAreOdd)  // false

const evens = [0, 2, 4, 6, 8, 10]
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)

console.log(someAreEvens) // true
console.log(someAreOdds)  // false