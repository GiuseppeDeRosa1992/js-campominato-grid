// /* BONUS 3 CREO UN BOTTONE E SOLO QUANDO CLICCO INIZIA IL GIOCO E VEDO LE COSE IN PAGINA */
// //Richiamo il bottone in js
// let start = document.getElementById("start")
// let select = document.getElementById("difficulty")
// select.addEventListener("change", function(){
//     console.log("hai selezionato", select.value)
//     if (select.value == "easy") {
//         for (let i = 1; i <= 100; i++) {
//             start.addEventListener("click", function () {
//                 //Console log per stampare i numeri da 1 a 100 in console
//                 console.log(i)
//                 //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//                 let square = createSquare(i)
//                 //appendo alla griglia in html square
//                 grid.append(square)
//             })
//         }
//     }else if (select.value == "medium") {
//         for (let i = 1; i <= 81; i++) {
//             start.addEventListener("click", function () {
//                 //Console log per stampare i numeri da 1 a 100 in console
//                 console.log(i)
//                 //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//                 let square = createSquare(i)
//                 square.classList.add("square-9")
//                 //appendo alla griglia in html square
//                 grid.append(square)
//             })
//         }
//     }else if (select.value == "hard") {
//         for (let i = 1; i <= 49; i++) {
//             start.addEventListener("click", function () {
//                 //Console log per stampare i numeri da 1 a 100 in console
//                 console.log(i)
//                 //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
//                 let square = createSquare(i)
//                 square.classList.add("square-7")
//                 //appendo alla griglia in html square
//                 grid.append(square)
//             })
//         }
//     }
// })