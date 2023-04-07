//operacje matematyczne

function add(a,b){
    console.log(a + b);
}

function subtract(a,b){
    console.log( a - b);
}

function multiply(a,b){
    console.log( a * b);
}

function divide(a,b){
    console.log( a / b);
}

function operate(operation,a,b){
    operation(a,b)

}

// działanie przycisków
//liczbowe
const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector('.display');
const displayLast = document.querySelector('.displayLast');


function isDivEmpty(element) {
    return element.innerHTML.trim() === '';
  }


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if(display.innerHTML === '0'){
            display.innerHTML = button.innerHTML;
        }
        else{
            display.innerHTML += button.innerHTML;
        }

    });
  });

// matematyczne
const mathButton = document.querySelectorAll(".mathButton");




mathButton.forEach((button) => {
    button.addEventListener("click", () => {
        if(isDivEmpty(displayLast)){
            displayLast.innerHTML += display.innerHTML + button.innerHTML;
        }
        else{
            displayLast.innerHTML = displayLast.innerHTML.substring(0, displayLast.innerHTML.length - 1) + button.innerHTML ;
        }
    });
  });