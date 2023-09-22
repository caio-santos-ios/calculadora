const screen = document.querySelector("h2")

const calculeted = (value1, value2, operation) => {
    num1 = parseFloat(value1)
    num2 = parseFloat(value2)

    switch (operation){
        case "+":
            screen.innerText = num1 + num2
            break;
        case "-":
            screen.innerText = num1 - num2
            break;    
        case "x":
            screen.innerText = num1 * num2
            break;    
        case "/":
            screen.innerText = num1 / num2
            break;      
    }

}

let valueOne = ""
let valueTwo = ""
let operation = ""
const btns = document.querySelectorAll("#btn")
btns.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault()

        const buttonValue = e.target.innerHTML

        if(buttonValue === "="){
            if(valueOne !== "" && valueTwo !== ""){
                calculeted(valueOne, valueTwo, operation)
                valueOne = screen.innerText
                valueTwo = ""
                operation = "" 
                return
            }
            return
        }

        if(["+", "-", "x", "/"].includes(e.target.innerHTML)){
            operation = buttonValue
        } else {
            if(operation !== ""){
            valueTwo += buttonValue
            screen.innerText = parseFloat(valueTwo)
            }else{
                valueOne += buttonValue
                screen.innerText = valueOne
            }
        }   
    })
})

const btnClear = document.querySelector("#btn__clear")
btnClear.addEventListener("click", () => {
    screen.innerText = 0
    valueOne = ""
    valueTwo = ""
})