let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation;
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}
