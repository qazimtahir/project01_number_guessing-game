#! /usr/bin/env node
// Number Guessing Game
import inquirer from "inquirer";
let systemGeneratedNumber = Math.floor(Math.random() * 10);
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "guess",
        message: "Guess a number between 0 and 10",
    },
]);
let guess = parseInt(answers.guess);
if (guess === systemGeneratedNumber) {
    console.log("You Win!");
    process.exit();
}
else {
    console.log("You Lose!");
    console.log(`System Number is ${systemGeneratedNumber}.`);
    process.exit();
}