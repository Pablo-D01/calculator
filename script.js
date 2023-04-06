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

const displayButtons = document.querySelectorAll(".displayButton");

displayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.innerHTML);
      return button.innerHTML;
    });
  });