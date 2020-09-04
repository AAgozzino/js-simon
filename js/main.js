/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

// Genero numeri casuali
var min = 1;
var max = 100;
var delayTime = 5;

function randomNumber(min, max){
  return  Math.floor(Math.random()* (max-min + 1)) + min;
};
// Inserisco 5 numeri in un array PC
var numeriPC = [];
while (numeriPC.length < 5) {
  let numRandom = randomNumber(min,max);
  if (numeriPC.includes(numRandom) == false) {
    numeriPC.push(numRandom)
  }
};
console.log(numeriPC);
// Alert che mostra i 5 numeri casuali
alert(numeriPC);
// Dopo 30 secondi prompt che chiede i 5 nuemri
  // Inserire i numeri in array Utente
var numeriUtente = [];
setTimeout(function(){
  while (numeriUtente.length < 5) {
    let numInserito = parseInt(prompt("Inserisci uno dei 5 numeri mostrati"))
    if (numInserito < min || numInserito > max) {
      alert("Attenzione!!! Numero non valido")
    }
    else if (numeriUtente.includes(numInserito)) {
      alert("Attenzione!!! Numero già inserito")
    } else {
      numeriUtente.push(numInserito)
    }
  };
  console.log(numeriUtente);
  var punteggio = 0;
  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriPC.includes(numeriUtente[i])) {
      punteggio++;
    }
  };
  console.log(punteggio);
}, delayTime * 1000);


// Messaggio con quanti numeri l'utente si è ricordato
  // Per ogni numero inserito dall'utente controllo se è presente nell'array PC --> punteggio++
