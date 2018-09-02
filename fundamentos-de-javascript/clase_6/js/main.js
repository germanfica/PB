// Variables declaration
//const name, days, length, avarageKms; // Constants must be initialized
let totalKms;

// Variables initialization
const name = "German";
const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "fryday",
  "saturday",
  "sunday"
];
const length = days.length;
totalKms = 0;

for(let i = 0; i < length;i++) {
  const kms = run();
  totalKms +=  kms;
  console.log(`Day ${i+1} is ${days[i]}. ${name} ran ${kms} kilometers`);
}

// Average Calculation
avarageKms = totalKms / length;

// Write
console.log(`On average, ${name} ran ${avarageKms.toFixed(2)} kilometers`);
