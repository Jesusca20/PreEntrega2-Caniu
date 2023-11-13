let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");

let operaciones = ['suma', 'resta', 'multiplicación', 'división'];

let usuario = {
    nombre: nombre,
    edad: edad,
    operaciones: operaciones
};


let display = document.getElementById('display');
let calculation = '';


function addToDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function addOperator(operator) {
    calculation += ' ' + operator + ' ';
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    const result = eval(calculation);
    display.value = result;
    calculation = result.toString();
}
