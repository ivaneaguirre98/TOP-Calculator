//define numbers used in calculation
let num1;
let num2;
let num3;
let operation;

//define the calculator and calculator buttons in javascript
let calculator = document.querySelector(".calculator");
let keys = calculator.querySelector(".buttonsGrid");

//define the calculator screen
let screen = document.querySelector(".currentScreen");

//eventListener for when a key is pressed
keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        let displayedNum = screen.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;

        //removes isDepressed class from operator key after number key is hit
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove("isDepressed"));
       

        if(!action){
            //if the calculator shows 0, we want to replace the calculator's display with the clicked key
            if(displayedNum === '0' || previousKeyType === "operator"){
                screen.textContent= keyContent;
                calculator.dataset.previousKeyType = "undefined";
            }

            //if the calculator shows a non-zero number, we want to append the clicked key to the displayed number
            else{
                screen.textContent = displayedNum + keyContent;
                // console.log(keyContent)
            }
            

        }

        if(
            action ==="addition" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            key.classList.add("isDepressed");
            calculator.dataset.previousKeyType = "operator"
            num1 = displayedNum;
            operation = action;            
        }

        if(action === "decimal"){
            //when user hits decimal key, then a decimal point will appear and then allow numbers to append after the decimal
            screen.textContent = displayedNum + '.';
        }

        if(action === "clear"){
           clear();
        //    console.log(screen.textContent);
        }

        if(action === "equals"){
            num2 = displayedNum;
            screen.textContent = operate(num1,num2,operation)

            
        }

        if(action === "delete"){
            // console.log("delete key!");
        }
    }
})


function operate(number1, number2, operation){
    let num1 = Number(number1);
    let num2 = Number(number2);
    switch (operation){
        case "addition":
        addition(num1,num2);
        break;

        case "subtract":
            subtract(num1,num2);
            break;
        
        case "multiply":
            muliply(num1,num2);
            break;

        case "divide":
            divide(num1,num2);
            break;

    }
}

//addition function
function addition(num1, num2){
    num3 = num1+num2;
    console.log(num3);
}

//sub function
function subtract(num1,num2){
    num3 = num1 - num2;
    console.log(num3);
}

function muliply(){
    num3 = num1 * num2;
    console.log(num3);
}

function divide(){
    if(num2 != 0){
        num3 = num1 / num2;
        console.log(num3);
    }

    else{
        console.log("Cannot divide by 0");
    }

}

function clear(){
    screen.textContent = 0;
}
