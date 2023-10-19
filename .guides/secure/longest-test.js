const longestOddLength = require("../../longestOddWord");

let words = process.argv.slice(2);  // Skip node path and script path

console.log(longestOddLength(words));