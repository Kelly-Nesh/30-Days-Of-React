const c = console.log;

let age = parseInt(prompt("Enter your age: "));

age < 18
  ? c(`${18 - age} more years left to reach min driving age`)
  : c("You're old enough to drive");
