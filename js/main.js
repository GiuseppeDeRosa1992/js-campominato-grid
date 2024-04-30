console.log("ciao giuseppe")

let grid = document.getElementById("grid")
//CREO CICLO FOR E FACCIO PARTIRE IL CONTATORE DA 1 E LO FACCUIO FINIRE A 100
for (let i = 1; i <= 100; i++) {
    console.log(i)
    let square = document.createElement("div")
    square.classList.add("square")
    square.innerText = i
    grid.append(square)

    square.addEventListener("click", function () {
        square.classList.toggle("blue")
    }
    )
}