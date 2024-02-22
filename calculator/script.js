let firstNumber = ""
let secondNumber = ""
let operator = ""
let history = ""
let exp = ""
let result 

function appendNumber(val){
    if (operator === ""){
        firstNumber += val
        history += val
        exp += val
    }
    else{
        secondNumber += val
        history += val
        exp += val
    }
    document.getElementById("text").value = exp
    document.getElementById("hist").value = history
}

function setOperator(val){
    if(secondNumber === ""){
        operator = val
        exp += val
        history += val    
    }
    else{
        secondNumber = ""
        firstNumber = String(result)
        exp = String(result)
        operator = val
        exp += val
        history += val
    }
    document.getElementById("text").value = exp
    document.getElementById("hist").value = history
}

function calculate(){
    if(firstNumber !== "" && operator !== "" && secondNumber !== ""){
        switch (operator) {
            case '+':
                result = parseInt(firstNumber) + parseInt(secondNumber)
                break;
            case '-':
                result = parseInt(firstNumber) - parseInt(secondNumber)
                break;
            
            case '*':
                result = parseInt(firstNumber) * parseInt(secondNumber)
                break;
            
            case '/':
                result = parseInt(firstNumber) / parseInt(secondNumber)
                break;
        
            default:
                break;
        }
        document.getElementById("text").value = String(result)
        exp = ""
    }
}

function clearResult(){
    firstNumber = ""
    secondNumber = ""
    operator = ""
    history = ""
    exp = ""
    document.getElementById("text").value = exp
    document.getElementById("hist").value = history
}

