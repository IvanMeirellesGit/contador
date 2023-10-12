/*
const value = document.getElementById('value')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const updateValue = () => {
    value.innerHTML = count
}

let count = 0
let intervalId = 0

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1
        updateValue()
    }, 100)
})
*/

const plusButton = document.querySelector(`#plus`)
const minusButton = document.querySelector(`#minus`)
const value = document.querySelector(`#value`)
const resetButton = document.querySelector(`#reset`)

const updateValue = () => {
    value.innerHTML = count
}


let count = 0
let intervalId = 0

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1
        updateValue()
    }, 75)
})

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1
        updateValue()
    }, 75)
})

resetButton.addEventListener('click', () => {
    count = 0
    updateValue()
})

document.addEventListener('mouseup', () => clearInterval(intervalId))

