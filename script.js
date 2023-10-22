const screen = document.querySelector("h2")
const screenAcumulation = document.querySelector("h4")

const calculeted = (value1, value2, operation) => {
    num1 = parseFloat(value1)
    num2 = parseFloat(value2)

    switch (operation){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2   
        case "x":
            return num1 * num2

        case "/":
            return num1 / num2
                  
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
                const result = calculeted(valueOne, valueTwo, operation)
                if (!Number.isInteger(result)) {
                    screenAcumulation.innerText = result.toFixed(2)
                    screen.innerText = result.toFixed(2)
                    return
                }
                screenAcumulation.innerText = result
                screen.innerText = result

                valueOne = screen.innerText
                valueTwo = ""
                operation = "" 
                return
            }
            return
        }

        if(["+", "-", "x", "/"].includes(e.target.innerHTML)){
            operation = buttonValue
            screenAcumulation.innerText = `${screenAcumulation.innerText} ${operation}`
        } else {
            if(operation !== ""){
            valueTwo += buttonValue
            screen.innerText = parseFloat(valueTwo)
            screenAcumulation.innerText = `${valueOne} ${operation} ${valueTwo}`
            }else{
                valueOne += buttonValue
                screen.innerText = valueOne
                screenAcumulation.innerText = valueOne
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