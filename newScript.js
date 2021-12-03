//define the numbers and operations to be used in our calculations
let num1="";
let num2="";
let num3;
let operation;

//define the calculator and calculator in JS
let calculator = document.querySelector(".calculator");
let keys = calculator.querySelector(".buttonsGrid");

//define the calculator screen
let screen = document.querySelector(".currentScreen");

//eventListner for when a key is pressed
keys.addEventListener('click', collectPress);

//function that sets up our calculation
function collectPress(keys){
    if(keys.target.matches("button")){
        let key = keys.target;
        let action = key.dataset.action;
        // console.log(action);
        let keyContent = key.textContent;
        // console.log(keyContent);
        let displayedNum = screen.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove("isDepressed"));

        // if there is no action assigned to the button, it is a number key
        if(!action){
            createNum(displayedNum, previousKeyType, keyContent, key);
        }

        if(action ==="addition" || action === "subtract" || action === "multiply" ||action === "divide"){
            operator(key, previousKeyType, displayedNum, action);
        }
    }
}

//allows us to populate the screen with the number of keys we hit
function createNum(displayedNum, previousKeyType, keyContent, key){
    //if the calculator shows 0, we want to replace the calculator displayedNum with the clicked key
    if(displayedNum === '0' || previousKeyType ==='operator'){
        key.classList.remove("isDepressed");
        screen.textContent = keyContent;
        calculator.dataset.previousKeyType = "undefined";
    }

    else{
        screen.textContent = displayedNum + keyContent;
    }
}

function operator(key, previousKeyType, displayedNum, action){
    key.classList.add("isDepressed");
    calculator.dataset.previousKeyType = "operator"

    if(num1 === ""){
        num1 = displayedNum;
        console.log("Num 1 is " + num1);
    }

    else if(num2 === ""){
        num2 = displayedNum;
        console.log("Num 1 is " + num1 + "and Num 2 is " + num2);
    }
}