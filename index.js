import inquirer from "inquirer";
let num1 = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "plz enter ur first number",
    }
]);
let num2 = await inquirer.prompt([{
        name: "number2",
        type: "number",
        message: "plz enter secondvalue",
    }]);
console.log("the addition of num1 and num2 is" + [num1.number1 + num2.number2]);
console.log("the substraction of number1 and 2 is" + [num1.number1 - num2.number2]);
console.log("the multiplication od number 1 and 2 is " + [num1.number1 * num2.number2]);
console.log("the division of num1 and num2 is " + [num1.number1 / num2.number2]);
