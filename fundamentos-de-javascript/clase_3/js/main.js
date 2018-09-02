// Variable declaration
let base, height, text;

// Variable Initialization
text = document.getElementById("id_area");
base = 5;
height = 7;

// Algorithm deploy
const areaOfTriangle = (base, height) => (base * height)/2; // Arrow function

// Write value
console.log(`The area of triangle is: ${areaOfTriangle(base, height)}`);
text.innerHTML = `The area of triangle is: ${areaOfTriangle(base, height)}`;
