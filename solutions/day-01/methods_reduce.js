const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum); // 55

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const summ = numbers.reduce((acc, cur) => acc + cur, 5)
console.log(summ) // 60

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"