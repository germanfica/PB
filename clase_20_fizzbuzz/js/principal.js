// Declaración de variables
var max;

// Inicialización de variables
max=100;

for (var i = 1; i < max; i++) {
  if(i%3==0) {
    document.write("Fizz");
  }else if (i%5==0) {
    document.write("Buzz");
  }else if (i%3==0 && i%5==0) {
    document.write("FizzBuzz");
  }else {
    document.write(i);
  }
  document.write("<br/>");
}
