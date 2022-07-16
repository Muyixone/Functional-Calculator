function printSymbol(e) {
    let displayScreen = document.getElementById("display");
    let object = e.target;

    displayScreen.value += object.textContent
}


let displayScreen = document.getElementById("display").value;

let numbers = document.getElementsByClassName("btn_white");

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].value.addEventListener("click", printSymbol);
    }


