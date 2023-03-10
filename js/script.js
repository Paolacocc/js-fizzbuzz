//scrivi un un programma che stampa i numeri da 1 a 100
//calcola tutti i multipli di tre e di 5
//calcola tutti i multipli di 5
//calcola tutti i multipli di 3
const boxElem = document.getElementById("squares");

for (let i = 1; i <= 100; i++ ) {
    let multipli;
    let classColor;
    if (i % 15 === 0) {
        multipli = "FizzBuzz";
        classColor = "FizzBuzz";
    } else if (i % 3 === 0) {
        multipli = "Fizz";
        classColor = "Fizz";
    } else if (i % 5 === 0) {
        multipli = "Buzz";
        classColor = "Buzz";
    } else {
        multipli = i;
        classColor = "normNum";
    }
    console.log(multipli);

    //stampa il gioco

    boxElem.innerHTML += `<div class="box ${classColor}">${multipli}</div>`;
}




