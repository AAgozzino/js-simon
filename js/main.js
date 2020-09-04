/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

// Genero numeri casuali
function randomNumber(min, max){
  return  Math.floor(Math.random()* (max-min + 1)) + min;
};
// Inserisco 5 numeri in un array PC
var numeriPC = [];
while (numeriPC.length < 5) {
  let numeroRandom = randomNumber(1,100);
  if (numeriPC.includes(numeroRandom) == false) {
    numeriPC.push(numeroRandom)
  }
};
console.log(numeriPC);
// Alert che mostra i 5 numeri casuali
alert(numeriPC);
// Dopo 30 secondi prompt che chiede i 5 nuemri
  // Inserire i numeri in array Utente

// Messaggio con quanti numeri l'utente si è ricordato
  // Per ogni numero inserito dall'utente controllo se è presente nell'array PC --> punteggio++
