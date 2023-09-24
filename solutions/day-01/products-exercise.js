const c = console.log;
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Print the product items as follows using forEach
products.forEach((el) => {
  c(`The price of ${el.product} is`, Number(el.price) ? el.price : "unknown");
});

// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach((el) => {
  Number(el.price) ? (sum += el.price) : 0;
});
c(sum);

// Create an array of prices using map and store it in a variable prices
let prices = products.map((el) => el.price);

// Filter products with prices
products.filter((el) => Number(el.price));

// Use method chaining to get the sum of the prices(map, filter, reduce)
sum = products
  .map((el) => el.price)
  .filter((el) => Number(el))
  .reduce((acc, cur) => acc + cur);
c(sum);

// Calculate the sum of all the prices using reduce only
function reducer(accumulation, current_value) {
  let i = Number(current_value.price) ? Number(current_value.price) : 0;
  return accumulation + i;
}
sum = products.reduce(reducer, 0);
c(sum);

// Find the first product which doesn't have a price value
products.find((el) => !Number(el.price));

// Find the index of the first product which does not have price value
products.findIndex((el) => !Number(el.price));

// Check if some products do not have a price value
products.some((el) => !Number(el.price));

// Check if all the products have price value
products.every((el) => Number(el.price));

