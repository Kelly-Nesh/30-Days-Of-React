const countries = ["Finland", "Estonia", "Sweden", "Norway"];
countries.forEach((country, index, arr) => {
  console.log(index, country.toUpperCase());
});

const numbers = [1, 2, 3, 4, 5]
let sum = 0
numbers.forEach((n) => (sum += n))

console.log(sum) // 15