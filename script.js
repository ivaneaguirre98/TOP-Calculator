//define numbers used in calculations
let num1;
let num2;

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

        //removes isDepressed class from operator key after number key is hit
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove("isDepressed"));
       

        if(!action){
            //if the calculator shows 0, we want to replace the calculator's display with the clicked key
            if(displayedNum === '0'){
                screen.textContent = keyContent;
            }

            //if the calculator shows a non-zero number, we want to append the clicked key to the displayed number
            else{
                screen.textContent = displayedNum + keyContent;
            }
            

        }

        if(
            action ==="addition" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            console.log("operator key!");
            key.classList.add("isDepressed");
        }

        if(action === "decimal"){
            //when user hits decimal key, then a decimal point will appear and then allow numbers to append after the decimal
            screen.textContent = displayedNum + '.';
        }

        if(action === "clear"){
            console.log("clear key");
        }

        if(action === "equals"){
            console.log("equals key!");
        }

        if(action === "delete"){
            console.log("delete key!");
        }
    }
})

//addition function
function add(){
    num3 = num1+num2;
    console.log(num3);
}

//sub function
function subtraction(){
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
