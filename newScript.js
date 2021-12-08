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
    console.log(num1,currentOperator);
}

function evaluate(){
    console.log("calling evaulate function");
}