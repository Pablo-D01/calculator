//operacje matematyczne

function add(a,b){
    return(a + b);
}

function subtract(a,b){
    return( a - b);
}

function multiply(a,b){
    return( a * b);
}

function divide(a,b){
    return( a / b);
}

function operate(operation,a,b){
   return operation(a,b)

}

// działanie przycisków
//liczbowe
const numberButtons = document.querySelectorAll(".numberButton");
const display = document.querySelector('.display');
const displayLast = document.querySelector('.displayLast');
const comaButton = document.querySelector('.comaButton');
const clearButton = document.querySelector('.clearButton');
const deleteButton = document.querySelector('.deleteButton');


let firstNumber = 0;
let secondNumber = 0;
let operand ='';
let operation ='';
let math = 0 ;
let result = 0;

function isDivEmpty(element) {
    return element.innerHTML.trim() === '';
  }

function reset(){
  firstNumber = 0;
  secondNumber = 0;
  operand ='';
  operation ='';
  math = 0 ;
  display.innerHTML = ''
  displayLast.innerHTML = ''
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if( math === 0 ){
        if(display.innerHTML === '0'){
            display.innerHTML = button.innerHTML;
        }
        else{
            display.innerHTML += button.innerHTML;
        }
      }
      else{
        reset()
        display.innerHTML = button.innerHTML;
      }
    });
  });

  comaButton.addEventListener("click", () => {
    if(math === 0){
      if(display.textContent.includes('.') ){
        return
      }
      else{
        display.innerHTML += comaButton.innerHTML;
      }
    }
    else{
      reset();
      display.innerHTML += comaButton.innerHTML;
    }
  });

// matematyczne
const mathButton = document.querySelectorAll(".mathButton");
const operateButton = document.querySelector('.operateButton');


mathButton.forEach((button) => {
    button.addEventListener("click", () => {

        if(isDivEmpty(displayLast)){
            firstNumber = Number(display.innerHTML);
            displayLast.innerHTML += display.innerHTML + button.innerHTML;
            operand = button.innerHTML;
            display.innerHTML ='0';
        }
        else if( math === 0 ){
            displayLast.innerHTML = displayLast.innerHTML.substring(0, displayLast.innerHTML.length - 1) + button.innerHTML ;
            operand = button.innerHTML;
        }
    });
  });

  
function convertOperand(operand){
    if (operand === '+') {
        operation = add;
      } else if (operand === '-') {
        operation = subtract;
      } else if (operand === '*') {
        operation = multiply;
      } else if (operand === '÷') {
        operation = divide;
      }
    
}

function calculate(){
  math ++;
  console.log('works')
  convertOperand(operand)
  secondNumber = Number(display.innerHTML);
  let result = operate(operation,firstNumber,secondNumber);
  display.innerHTML = result; 
  // displayLast.innerHTML += `${secondNumber}=`
  displayLast.innerHTML = `${firstNumber} ${operand} ${secondNumber} =`

  console.log(result)
}

operateButton.addEventListener('click', () => {
    if(operand !='' && math === 0){
        calculate();
    }
  });

  // clear & delete

  clearButton.addEventListener('click', () => {
    reset();
  })

  deleteButton.addEventListener('click', () => {
    if(math === 0){
      display.innerHTML = display.innerHTML.slice(0, -1)
    }
  })


  // fajny trick
  calculator= document.getElementById("calculator");

  function transform(){  
    calculator.style.transform = "translate3d(0px, 0px, -250px)";
    calculator.style.cursor="default";
}

function transformReverse(){
  calculator.style.transform = "translate3d(0px, 0px, -250px)";

}

calculator.addEventListener('click', transform)

