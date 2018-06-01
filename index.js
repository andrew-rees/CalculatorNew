const readline = require('readline-sync');

console.log("Welcome to the New Calculator");

console.log("Please enter your first number");
const firstNumberInput = readline.prompt();
const firstNumber = +firstNumberInput

console.log("Please enter your second number");
const secondNumberInput = readline.prompt();
const secondNumber = +secondNumberInput

console.log("Please enter your operator (eg +, -, /, *");
const operatorInput = readline.prompt();

switch (operatorInput) {
    case "+":
    console.log ("The answer is: " + firstNumber + secondNumber)
    break;
    case "-":
    console.log ("The answer is: " + firstNumber - secondNumber)
    break;
    case "*":
    console.log ("The answer is: " + firstNumber * secondNumber)
    break;
    case "/":
    console.log ("The answer is: " + firstNumber / secondNumber)
    break;
}