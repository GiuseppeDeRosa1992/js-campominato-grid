console.log("ciao giuseppe")

let grid = document.getElementById("grid")
//CREO CICLO FOR E FACCIO PARTIRE IL CONTATORE DA 1 E LO FACCUIO FINIRE A 100
for (let i = 1; i <= 100; i++) {
    //Console log per stampare i numeri da 1 a 100 in console
    console.log(i)
    //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
    let square = createSquare(i)
    //appendo alla griglia in html square
    grid.append(square)
}

//inizio funzione che mi crea il quadrato
function createSquare(qualcosa) {
    //creo una variabile e creo un div
    let quadrato = document.createElement("div")
    //aggiungo una class al div con variabile quadrato
    quadrato.classList.add("square")

    //aggiungo qualcosa dentro il div e dopo quel qualcosa sarà l'indice del ciclo (i numeri sono fissi)
    quadrato.innerText = qualcosa

    //creo l'evento che quando clicco sul quadrato mi aggiunge la class che su css ha background blue e con toggle quando clicco un quadrato blu mi ritorna con background normale
    quadrato.addEventListener("click", function () {
        quadrato.classList.toggle("white")
        //consolelog che mi dice che quadrato ho cliccato
        console.log("Ho cliccato", quadrato)
    }
    )
    //la funzione mi ritorna quadrato che poi vado a richimare fuori
    return quadrato
}