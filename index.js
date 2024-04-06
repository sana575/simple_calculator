#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
const asnwar = await inquirer.prompt([
    { message: "Enter frist number", type: "number", name: "fristNumber" },
    { message: "inter sedond number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "Division"], },
]);
//conditional statement
if (asnwar.operator === "addition") {
    console.log(asnwar.fristNumber + asnwar.secondNumber);
}
else if (asnwar.operator === "subtraction") {
    console.log(asnwar.fristNumber - asnwar.secondNumber);
}
else if (asnwar.operator === "multiplication") {
    console.log(asnwar.fristNumber * asnwar.secondNumber);
}
else if (asnwar.operator === "Division") {
    console.log(asnwar.fristNmber / asnwar.secondNumber);
}
else {
    console.log("please select valid operator");
}
