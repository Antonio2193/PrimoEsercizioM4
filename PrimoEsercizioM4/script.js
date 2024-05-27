//1.funzione che controlla se 2 numeri interi sono uguali a 50 o se la loro somma è uguale a 50 
/* let num1 
let num2 
let risultato 
function controlla (num1, num2) {
    num1 = 35
    num2 = 50
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50)
        risultato = true
    else {
        risultato = false
    }
    return risultato
}
risultato = controlla (num1, num2)
console.log(risultato) 
 */


//2.rimuove carettere da una stringa
/* let stringa = "ciao Mmondo"
let numC = stringa.indexOf('m')
function rimuoviCarattere (stringa, numC){
    let newStr = stringa.slice(0, numC) + stringa.slice(numC + 1);
    return newStr
}
newStr = rimuoviCarattere (stringa,numC)
console.log(newStr)
console.log(stringa.slice(0, numC))
console.log(stringa.slice(numC +1)) */


//3.controlla se due numeri sono compresi fra 40 e 60 o fra 70 e 100 
/* let num3 = 50
let num4 = 200
let risultato2
function compresi (num3, num4){
    if (((num3 >= 40 && num3<= 60)||(num4 >=40 && num4 <= 60)) || ((num3 >= 70 && num3<= 100)||(num4 >=70 && num4 <= 100)))
        risultato2 = true
        else{
            risultato2 = false
        }    
    return risultato2   
}
risultato2 = compresi(num3, num4)
console.log(risultato2) */


//4.controlla se la città inserita ha presente nella stringa la parolo New o Los, se si stampa il nome della città
/* let citta = "Poggibonsi"
let contN = "New"
let contL = "Los"
let Citta 
function cittaNL(citta){
    if((citta.includes(contN))||(citta.includes(contL))){
        Citta = citta
    }
    else{
        Citta = false
    }
    return Citta
}
Citta = cittaNL(citta)
console.log(Citta) */ 


//5.crea funzione che calcoli e ritorni il numero degli elemnti di un array
/* let squadre = [
    "inter",
    "lecce",
    "lazio",
    "napoli"
]
let numSquadre
function lunghezza(squadre){
    numSquadre = squadre.length
    return numSquadre
}
numSquadre = lunghezza(squadre)
console.log(numSquadre) */


//6.controlla se nell'array sono presenti i numeri 1 o 3
/* let numeri = [
    2,
    4,
    5,
    6,
    7,
    8,
]
let risultato3
function controllaArray (numeri) {
    if (!numeri.includes(1) && !numeri.includes(3)){
        risultato3 = true
    }
    else{
        risultato3 = false
    }
    return risultato3
}
risultato3 = controllaArray(numeri)
console.log(risultato3) */


//7.funzione per vedere il tipo di angolo
/* let angolo = 90
let tipoAngolo
function cheAngolo(angolo){
    if (angolo < 90){
        tipoAngolo = "acuto"
    }else if(angolo === 90){
        tipoAngolo = "retto"
    }else if(angolo > 90 && angolo < 180){
        tipoAngolo = "ottuso"
    }else if(angolo === 180) {
        tipoAngolo = "piatto"
    }
    return tipoAngolo
}
tipoAngolo = cheAngolo(angolo)
console.log(tipoAngolo) */


//8.funzione che crea acronimo partendo da una frase
/* let frase
function acronimo (frase){
    let acr = ""
    frase = "Automobil Club Italia"
    let parole = frase.split(' ')
    for (let parola of parole){
        acr += parola.charAt(0).toUpperCase();
    }
    return acr
}
console.log(acronimo(frase))
 */


//EXTRA

//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa
/*function caratterePiuUsato(stringa) {
    // Creare un oggetto per tenere traccia della frequenza
    const frequenza = {}; // l'oggetto della parola pippo sarà compsto così {p:3 i:1 o:1}
    
    //variabili per tenere traccia del carattere più usato e della sua frequenza
    let maxCar = '';
    let maxCount = 0;
    // ciclare attraverso la stringa
    for (let i of stringa) {
        // Se il carattere è già presente nell'oggetto, incrementare il conteggio, altrimenti inizia da 1
        if(frequenza[i]){
            frequenza[i] +=1
         }else{
            frequenza[i] = 1
         }
    }
    // ciclare l'oggetto delle frequenze per trovare il carattere con la frequenza maggiore
    for (let i in frequenza) {
      if (frequenza[i] > maxCount) {
        maxCount = frequenza[i];
        maxCar = i;
      }
    }
    // Restituire il carattere più usato
    return maxCar;
}
  let stringa = "ermenegildo";
  let risultato = caratterePiuUsato(stringa);
  console.log(risultato); */


//5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario.
/* let numero 
function numCont(numero){
    let numeroStr = numero.toString() // trasformo il numero in stringa per poterlo manipolare
    let arrNum = numeroStr.split('') // divido la stringa in un array di "lettere"
    let arrNumR = arrNum.reverse() //cambio l'ordine dell'array
    let arrNumRStr = arrNumR.join('') //faccio tornare l'array a essere una stringa 
    parseInt(arrNumRStr) //trasformo nuovamente la stringa in numero 
    return arrNumRStr //ritorno il numero al contrario
}
numero = 399012
console.log(numCont(numero)) */
  

// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
/*   function scala (x){
    for (let i = 1 ; i <=x; i++){
        let riga = ""
        for (let y = 1; y <= i; y++){
            riga += "#"
        }
        console.log(riga)
    }  
} 
scala(10) */


//7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario.
/*  let parola = "Sigismondo"
 function contrario(parola){
    let arPar = parola.split('')
    arPar.reverse()
    let parolaCont = arPar.join('')
    return parolaCont
}
console.log(contrario(parola)) */


//10.Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN
/* function generateSpiralMatrix(N) {
    // Crea una matrice NxN vuota
    let matrix = Array.from({ length: N }, () => Array(N).fill(0));
    let num = 1;
    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = N - 1;
    while (num <= N * N) {
        // Riempie la riga superiore da sinistra a destra
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        // Riempie la colonna destra dall'alto verso il basso
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        // Riempie la riga inferiore da destra a sinistra
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        // Riempie la colonna sinistra dal basso verso l'alto
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
    
    return matrix;
}
let N = 3;
let spiralMatrix = generateSpiralMatrix(N);
console.log(spiralMatrix); */
