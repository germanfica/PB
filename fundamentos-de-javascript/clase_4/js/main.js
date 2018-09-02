// Variable initialization and declaration
let message = document.getElementById("id_notification");

// Arrow function
const canWatchTheMovie = (client, movie, isWithAdult = false) => {
  var answer = "";
  // I could use Ternary operator, some day
  if(client.age >= movie.pg) {
    answer = `${client.name} puede pasar a ver ${movie.name}`;
  }
  else if(isWithAdult) {
    answer = `${client.name} puede pasar a ver ${movie.name}. Aunque su edad es de ${client.age}, se encuentra acompañada/o por un adulto`;
  }
  else {
    answer = `${client.name} no puede pasar a ver ${movie.name}. Tiene ${age} años y necesita tener ${movie.pg}`;
  }
  return answer;
};

message.innerHTML = canWatchTheMovie(new Client('Sacha', 26), new Movie('Star Wars: El Despertar de la Fuerza', 13));
