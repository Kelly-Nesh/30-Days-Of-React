// We use the map method only with arrays and it always returns an array.
const countries = ["Finland", "Estonia", "Sweden", "Norway"];

const newCountries = countries.map((country) => {
    return country.toUpperCase()
})

console.log(newCountries)