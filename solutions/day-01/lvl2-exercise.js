const { webTechs } = require("./webTechs");

if (webTechs.indexOf("Sass") < 0) {
  webTechs.push("Sass");
  console.log(webTechs);
} else {
  console.log("Sass is a CSS preprocess");
}
