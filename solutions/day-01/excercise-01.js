const cl = console.log;
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// Get the first item, the middle item and the last item of the array
let midPoint;
countries.length % 2 === 0
  ? (midPoint = countries.length / 2)
  : (midPoint = (countries.length + 1) / 2);
// console.log(countries[0], countries[midPoint], countries[countries.length - 1]);
//Print the array like as a sentence:
// console.log(countries.join(", "), "are amazing countries to visit some time.");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let countryIndex = countries.indexOf("Kenya");
// if (countryIndex != -1) {
//   console.log(countryIndex);
// } else {
//   console.log("Country not found");
// }
// console.log(countries);
// console.log(countries.reverse());
cl(countries.splice())