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

operate(add,1,1);
operate(subtract,1,1);
operate(multiply,1,1);
operate(divide,1,1);