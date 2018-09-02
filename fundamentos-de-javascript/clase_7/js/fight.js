function fight(firstCharacter, secondCharacter) {
  // Variables declaration
  let round;

  // Variables initialization
  round = 1;

  const MIN_POWER = 5;
  const MAX_POWER = 12;

  const bothStillAlive = () => firstCharacter.hp > 0 && secondCharacter.hp >0;
  const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
  const firstCharacterStillAlive = () => firstCharacter.hp > 0;
  while(bothStillAlive()) {
    console.log(`Round ${round}`);
    const firstCharacterStr = calcularGolpe();
    const secondCharacterStr = calcularGolpe();
    if(firstCharacterStr>secondCharacterStr) {
      // ataca Goku
      console.log(`Goku a taca a Superman con un golpe de ${firstCharacterStr}`);
      secondCharacter.hp -= firstCharacterStr;
      console.log(`Superman queda en ${secondCharacter.hp} de vida`);
    }else {
      // ataca Superman
      console.log(`Superman ataca a Goku con un golpe de ${secondCharacterStr}`);
      firstCharacter.hp -= secondCharacterStr;
      console.log(`Goku queda en ${firstCharacter.hp} de vida`);
    }
    round++;
  }

  if(firstCharacterStillAlive()) {
    console.log(`${firstCharacter.name} ganó la pelea. Su vida es de: ${firstCharacter.hp}`);
  }else {
    console.log(`${secondCharacter.name} ganó la pelea. Su vida es de ${secondCharacter.hp}`);
  }
}
