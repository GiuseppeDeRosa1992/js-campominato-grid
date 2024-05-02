/* BONUS 3 CREO UN BOTTONE E SOLO QUANDO CLICCO INIZIA IL GIOCO E VEDO LE COSE IN PAGINA */
//Richiamo il bottone in js
let start = document.getElementById("start")
let select = document.getElementById("difficulty")

start.addEventListener("click", function () {
    grid.innerHTML = ""
    if (select.value == "easy") {
        console.log(select.value)
        for (let i = 1; i <= 100; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)

            //appendo alla griglia in html square
            grid.append(square)
        }
    }else if (select.value == "medium") {
        console.log(select.value)
        for (let i = 1; i <= 81; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            square.classList.add("square-9")
            //appendo alla griglia in html square
            grid.append(square)
        }
    }else if (select.value == "hard") {
        console.log(select.value)
        for (let i = 1; i <= 49; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            square.classList.add("square-7")
            //appendo alla griglia in html square
            grid.append(square)
        }
    }
})

/*************** FUNZIONE CON nCELLE e clasCELLE CON DENTRO IL CICLO FOR QUINDI
 QUANDO LA RICHIAMO MI GENERA TUTTO IL CICLO DEVO CAMBIARE SOLO I VALORI  ***********/

//  function generatedGrid(nCelle, clasCelle) {
//     for (let i = 1; i <= nCelle; i++) {
//         //Console log per stampare i numeri da 1 a 100 in console
//         console.log(i)
//         //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//         let square = createSquare(i, clasCelle)
//         square.classList.add(clasCelle)
//         //appendo alla griglia in html square
//         grid.append(square)
//     }
// }
// start.addEventListener("click", function () {
//     grid.innerHTML = ""
//     if (select.value == "easy") {
//         generatedGrid(100, "square")
//     }else if (select.value == "medium") {
//         generatedGrid(81, "square-9")
//     }else if (select.value == "hard") {
//         generatedGrid(49, "square-7")
//     }
// })



/*************************** CODICE CON LUCA CHE MI RESETTA OGNI VOLTA
 CHE CA,BIO DIFFICOLTà  ****************************************/

// console.log("ciao giuseppe")

// let grid = document.getElementById("grid")

// let start = document.getElementById("start")
// let select = document.getElementById("difficulty")

// start.addEventListener("click", function () {
//     grid.innerHTML = ""
//     if (select.value == "easy") {
//         //CREO CICLO FOR E FACCIO PARTIRE IL CONTATORE DA 1 E LO FACCUIO FINIRE A 100
//         for (let i = 1; i <= 100; i++) {
//             //Console log per stampare i numeri da 1 a 100 in console
//             console.log(i)
//             //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//             let square = createSquare(i , "square")
//             //appendo alla griglia in html square
//             grid.append(square)
//         }
//     }
//     else if (select.value == "medium") {
//         //CREO CICLO FOR E FACCIO PARTIRE IL CONTATORE DA 1 E LO FACCUIO FINIRE A 100
//         for (let i = 1; i <= 81; i++) {
//             //Console log per stampare i numeri da 1 a 100 in console
//             console.log(i)
//             //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//             let square = createSquare(i, "square-9")
//             //appendo alla griglia in html square
//             grid.append(square)
//         }
//     }
//     else if (select.value == "hard") {
//         //CREO CICLO FOR E FACCIO PARTIRE IL CONTATORE DA 1 E LO FACCUIO FINIRE A 100
//         for (let i = 1; i <= 49; i++) {
//             //Console log per stampare i numeri da 1 a 100 in console
//             console.log(i)
//             //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//             let square = createSquare(i, "square-7")
//             //appendo alla griglia in html square
//             grid.append(square)
//         }
//     }
// })






