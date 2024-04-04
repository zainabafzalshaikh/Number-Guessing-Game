#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuesedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userGuesedNumber === randomNumber) {
    console.log("congratulations! you guessed a right number");
}
else {
    console.log("sorry! you guessed a wrong number");
}
