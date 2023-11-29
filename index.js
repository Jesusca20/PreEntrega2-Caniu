let nombre = prompt("Ingrese su nombre:");


let textoElement = document.getElementById("nombre");
textoElement.textContent = "Calculos relizados por: " + nombre;

let calculation = '';
let history = document.getElementById('history');
let display = document.getElementById('display');

function addToDisplay(value) {
calculation += value;
display.value = calculation;
}

function addOperator(operator) {
        calculation += ' ' + operator + ' ';
        display.value = calculation;
        }

function calculate() {
let result;
try {
    result = eval(calculation);
    display.value = result;
    saveToHistory(calculation + ' = ' + result);
    calculation = ''; 
} catch (error) {
    display.value = 'Error';
}
}

function clearDisplay() {
calculation = '';
display.value = '';
}

function saveToHistory(entry) {
const listItem = document.createElement('li');
const textNode = document.createTextNode(entry);
listItem.appendChild(textNode);
history.appendChild(listItem);
}
