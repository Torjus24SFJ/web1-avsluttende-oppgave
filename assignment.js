//* I denne oppgaven vil det være noe kode som er definert i forkant, ikke fjern noe av denne, men dere skal noen steder fylle dem ut videre slik at koden fungerer.

/* Oppgave 1:  

Fiks loopen for randomArray slik at man får 100 tall pushet inn i randomArray med tall mellom 1 og 1000 (sjekkes via konsoll loggen under)
Tips: For å teste at loopen tar med 1 og 1000, prøv ut først med et lavere maks tall (f.eks 5)
*/

const randomArray = [];
const randomNumber = Math.floor(Math.random() * 100);

//! fiks denne:
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 1000)+ 1);
}
console.log(randomArray[randomNumber]); // expected result: 1-1000


/* Oppgave 2

Under er en funksjon filterArray som bruker .filter metoden på odds og evens const'ene. Du skal fikse getOdds og getEvens arrow funksjonene for å hente ut de riktige dataene til de forskjellige const'ene.  
*/
function filterArray(arr) {
  const odds = arr.filter(getOdds);
  const evens = arr.filter(getEvens);

// returnerer et object som gjør det lettere å referere til const'ene fra funksjonen senere:
  return { odds, evens };
}

//! fiks disse:
const getOdds = (num) => num % 2 !== 0; 
const getEvens = (num) => num % 2 === 0;

/* Oppgave 3

fiks sumOfOdds og sumOfEvens ved å bruke .reduce metodene. Les her for å se hvordan syntaxen er:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

eksmepel: odds.reduce(riktig syntax)

tips: accumulator kan forkortes til acc, currentValue kan forkortes til curr
tips2: syntaxen ligner noe på det som blir gjort i oppgave 2, men det er 2 parametere istedet + et tall.

*/

// Dette kalles deconstructing som gjør at man kan referere til variabler på innsiden av et scope (i dette tilfelle fra innsiden av en funksjon):
const { odds, evens } = filterArray(randomArray);

//! fiks disse:
const sumOfOdds = odds.reduce((sum, num) => sum + num, 0)
const sumOfEvens = evens.reduce((sum, num) => sum + num, 0)

// Oppgave 3.1


/*Skriv konsoll logger for:
- sumOfOdds
- sumOfEvens
- lengden av odds
- lengden av evens

bruk denne syntaxen i konsoll loggene (+ en ekstra ting etter variabelName hvor du skal finne lengden):
console.log("description of console log:", variabelName)

*/

//! skriv oppgave 3.1 svar her
console.log(`Sum of Odd numbers: ${sumOfOdds}`);
console.log(`Sum of Even numbers: ${sumOfEvens}`);
console.log(`Odd numbers in array: ${odds.length}`);
console.log(`Even numbers in array: ${evens.length}`);


/* Oppgave 4 

Under skal du lage en if else logikk som skal endre result og difference til en ny verdi. Litt av logikken er med allerede som sjekker om sumOfOdds er større enn sumOfEvens. Bruk denne tankegangen videre for å lage tilsvarende logikk hvis sumOfOdds er mindre enn sumOfEvens:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

Lag i tillegg en logikk som sjekker hvis verken den første eller andre contitionalen ikke stemmer. Logisk sett betyr det at den sjekker om sumOfEvens og sumOfOdds er like, men i realiteten kjøres denne koden bare fordi de to andre conditionalene ikke stemmer:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

*/

// Conditional Logic
let result = "";
let valueDifference = 0;
if (sumOfOdds > sumOfEvens) {
  valueDifference = sumOfOdds - sumOfEvens
  result = "Sum of Odds is greater than Sum of Evens"
} 
else if(sumOfOdds < sumOfEvens) 
{
  valueDifference = sumOfEvens - sumOfOdds
  result = "Sum of Evens is greater than Sum of Odds"
}
else 
{
  valueDifference = valueDifference;
  result = "Sum of Odd and Evens are Equal";
}

//  Oppgave 4.1
// konsoll log difference. Bruk samme syntax som i oppgave 3.1
console.log(`Result: ${result}`);
console.log(`Difference: ${valueDifference}`);


/* Oppgave 5

Lag en ny conditional logikk under hvor man sjekker hvilke av odds og evens som er lengst (syntax messig er det veldig likt som i oppgave 4, men man sjekker andre ting, ikke sumOfOdds og sumOfEvens). typeDifference skal endres til en template literal string med hensiktsmessig tekst for å forklare hva som skjer.

tips: Se tilbake hva du har skrevet i oppgave 3.1 for å finne lengdene du skal bruke i denne oppgaven.

eks: 
*/
//! skriv conditional logikken her
let typeDifference = "";
let lengthResult = Math.abs(odds.length - evens.length)

if (odds.length < evens.length)
  {
    typeDifference = `Odds has ${lengthResult} more numbers` 
  }
  else if (odds.length > evens.length) 
  {
    typeDifference = `Even has ${lengthResult} more numbers`
  }
  else 
  {
    typeDifference = "Odd and Even is equal"
  }

  console.log(typeDifference)  // Just to make it easier to correct errors
  // console.log(lengthResult)    And oh boy did i write it wrong the first time


/* Oppgave 6

- Finn gjennomsnittsverdien av oddetallene og partallene (burde være 2 nye variabler som returnerer gjennomsnittsverdien. Disse brukes i if/else du skal skrive som conditionals, men også for å vise fram riktig verdi i template literalen du skal lage)
- Lag en ny variabel for referanse til verdien du skal vise fram (tilsvarende slik typeDifference og valueDifference ble laget i de forrige oppgavene)
- Lag en ny conditional tilsvarende som i oppgave 4 og 5 for å få ut en template literal som vises på nettsiden.
- Lag en ny p tag i html filen med en id for referanse og skriv inn en ny document. getElementById for å få fanget den opp i javascript filen her:

eks: <p id="dinReferanseVerdi"></p>
eks: document.getElementByid("dinReferanseVerdiFraPtaggen").textContent = variabel

*/


//! definer en ny variabel for referanse til verdien du skal vise frem
const averageOdds = odds.length > 0 ? Math.floor(sumOfOdds / odds.length) : 0;
const averageEvens = evens.length > 0 ? Math.floor(sumOfEvens / evens.length) : 0;

//* Debug
// console.log(averageOdds)
// console.log(averageEvens)
// console.log(randomArray)

//! skriv if else her


/* BONUS Oppgave 7 


Gjør noe tilsvarende oppgave 6, men som viser noe som ikke har blitt vist enda med odds og evens.

f.eks median, størst verdi, minst verdi, hvor mange verdier er over/under en viss verdi, er noen av verdiene enn viss verdi, er noen av verdiene fra odds og evens like.

*/


//! Koden under skal ikke røres. Den gjør at man får ut svaret på nettsiden:
document.getElementById("result-odds").textContent = `Sum of Odds: ${sumOfOdds}. There are ${odds.length} odds`;
document.getElementById("result-evens").textContent = `Sum of Evens: ${sumOfEvens}. There are ${evens.length} evens`;
document.getElementById("valueDifference").textContent = `Difference between sum of Odds and Evens: ${valueDifference}`;
document.getElementById("typeDifference").textContent = typeDifference;
document.getElementById("averageOdds").typeContent = `Average odds: ${averageOdds};`

document.getElementById("result").textContent = result;
