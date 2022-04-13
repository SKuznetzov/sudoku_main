const puzzle = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const squares = 81

for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min','0')
}


