/**
 * Generate a language by manipulating strings
 *
 * First condition: if the word ends in "ar", these two characters are removed
 * Second condition: if the word begins with Z, "pe" is added at the end
 * Third condition:  if the translated word has 10 or more letters, split the half in two and join it with a middle gion
 * Fourth condition: if the original word is a palindrome, no previous rule counts and the same word is returned by inserting upper and lower case letters
 */
function platzom(str) {
  let translation = str;

  // Fourth condition
  const reverse = (str) => str.split('').reverse().join('');
  if(str == reverse(str)) {
    return minMay(str);
  }
  // First condition
  if(str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  // Second condition
  if(str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  // Third condition
  const length = translation.length;
  if(length>=10) {
    const firstHalf = translation.slice(0, Math.round(length/2));
    const secondHalf = translation.slice(Math.round(length/2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}

function minMay(str) {
  const length = str.length;
  let translation = '';
  let capitalize = true;
  for (let i = 0; i < length; i++) {
    const char = str.charAt(i);
    translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize;
  }

  return translation;
}

console.log(platzom("Programar")); // Program
console.log(platzom("Zorro")); // Zorrope
console.log(platzom("Zarpar")); // Zarppe
console.log(platzom("abecedario")); // abece-dario
console.log(platzom("sometemos")); // SoMeTeMoS
