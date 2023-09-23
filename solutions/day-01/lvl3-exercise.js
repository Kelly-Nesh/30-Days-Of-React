const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const c = console.log;

ages.sort();
c(ages);
c("Min age: ", ages[0], "\nMax age: ", ages[ages.length - 1]);

const median = (arr) => {
  arr.sort();
  let mid;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
    return arr[mid];
  } else {
    mid = (arr.length + 1) / 2;
    return (arr[mid] + arr[mid + 1]) / 2;
  }
};
c("Median: ", median(ages));
let sum = 0;
ages.forEach((element) => {
  sum += element;
});
let av = sum / ages.length;
c("Average", av);
c("Range: ", ages[ages.length - 1] - ages[0]);
c("Min: ", Math.abs(ages[0] - av));
c("Max: ", Math.abs(ages[ages.length - 1] - av));
