//define the calculator and calculator buttons in javascript
let calculator = document.querySelector(".calculator");
let keys = calculator.querySelector(".buttonsGrid");

//eventListener for when a key is pressed
keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        let key = e.target;
        let action = key.dataset.action;

        if(!action){
            console.log("number-key!");
        }

        if(
            action ==="addition" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            console.log("operator key!");
        }

        if(action === "decimal"){
            console.log("decimal key");
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


function operate(){
    add();
}

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
