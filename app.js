function roll() {
    let random = Math.ceil(Math.random() * 6);
    let dice = document.getElementById("dice");
    if (random == 1) {
      dice.src = "img/dice-1.png";
    } 
    else if (random == 2) {
      dice.src = "img/dice-2.png";
    } 
    else if (random == 3) {
      dice.src = "img/dice-3.png";
    } 
    else if (random == 4) {
      dice.src = "img/dice-4.png";
    } 
    else if (random == 5) {
      dice.src = "img/dice-5.png";
    } 
    else {
      dice.src = "img/dice-6.png";
    }
  }
  