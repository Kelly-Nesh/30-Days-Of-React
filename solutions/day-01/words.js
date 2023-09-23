const cl=console.log

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.split(".")
text[1] = text[1].split(", ").join(" ")
let words = text[0].concat(text[1]).split(" ")

cl(words, "\n", words.length)