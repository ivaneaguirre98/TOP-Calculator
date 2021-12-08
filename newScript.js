//setting our variables for the calculations
let num1 = "";
let num2 = "";
let num3 = "";
let currentOperator = null;
let previousKeyType = "";

//setting all number buttons to a single variable
let numberButtons = document.querySelectorAll('[data-number]');
//setting all operator buttons to a single variable
let operatorButtons = document.querySelectorAll('[data-operator');

//setting equals, clear and delete button to a variable
let equalButton = document.querySelector('[data-equals');
let deleteButton = document.querySelector('[data-delete');
let clearButton = document.querySelector('[data-clear]');

//setting our screen variable
let currentScreen = document.querySelector('[data-currentScreen]');

//add event listeners for each number button and it calls appendNum function
numberButtons.forEach((button) =>{
    button.addEventListener("click", appendNum);
})

//add event listeners for our operator buttons and it calls setOperation function
operatorButtons.forEach((operation) =>{
    operation.addEventListener('click', setOperation);
})

//adding event listener to our clear button and it calls clear screen function
clearButton.addEventListener('click', clearScreen);

//adding event listener to our equals button to evaluate our function
equalButton.addEventListener('click', evaluate);

//sets the screen back to zero and sets up a clear calculator
function clearScreen(){
    currentScreen.textContent = "0";
    num1 = "";
    num2 = "";
    num3 = "";
    currentOperator = null;
}

//each time you press a number button, it will append a number to it to create your number
function appendNum(button){
    let number = button.target.textContent;
    if(currentScreen.textContent === "0" || previousKeyType === "operator"){
        currentScreen.textContent = number;
        previousKeyType = "undefined";
    }

    else{
        currentScreen.textContent += number
    }
}

function setOperation(operation){
    if(currentOperator !== null){
        evaluate();
    } 
    currentOperator = operation.target.textContent;
    num1 = currentScreen.textContent;
    previousKeyType = "operator";
}

function evaluate(){
    num2 = currentScreen.textContent;
    currentScreen.textContent = Math.round(
        operate(num1,num2,currentOperator) * 1000) / 1000;
    currentOperator = null;
}

function operate(a,b,operator){
    a = Number(a);
    b = Number(b);
    console.log(a,b,operator)

    switch (operator){
        case "+":
            return addition(a,b);

        case "-":
            return subtract(a,b);
            
        case "x":
            return muliply(a,b);
            
        case "/":
            return divide(a,b);
    }
}

//addition function
function addition(a, b){
    return a+b;
}

//sub function
function subtract(a,b){
    return a-b;
}

function muliply(a,b){
    return a * b;
}

function divide(a,b){
    if(b != 0){
        return a / b;
    }

    else{
        return "ERROR";
    }

}