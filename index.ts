#! /usr/bin/env node

import inquirer from "inquirer"


const correctAnswers: any = {
    q1: "Static Typing",
    q2: "dynamic",
    q3: "readonly",
    q4: "function myFunc(): void",
    q5: "Both A and C",
    q6: "To describe the shape of an object",
    q7: "A type that can be one of several types",
    q8: "Type guard",
    q9: "--strict",
    q10: "function foo(param?: string)"
};

const QuizAnswers = await inquirer.prompt([
    {
        name: "q1",
        message: "What is TypeScript primarily used for?",
        type: "list",
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    },
    {
        name: "q2",
        message: "Which of the following is NOT a valid TypeScript data type?",
        type: "list",
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: "q3",
        message: "How do you denote a variable as readonly in TypeScript?",
        type: "list",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: "q4",
        message: "How do you specify that a function does not return anything in TypeScript?",
        type: "list",
        choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
    },
    {
        name: "q5",
        message: "How do you define a custom type in TypeScript?",
        type: "list",
        choices: ["interface", "typedef", "type", "Both A and C"]
    },
    {
        name: "q6",
        message: "What is the primary purpose of TypeScript interfaces?",
        type: "list",
        choices: ["To create new classes", "To describe the shape of an object", "To generate HTML templates", "To manage asynchronous code"]
    },
    {
        name: "q7",
        message: "What is a union type in TypeScript?",
        type: "list",
        choices: ["A type that can be any value", "A type that can be one of several types", "A type that can be both a string and a number simultaneously", "A type that can be an object"]
    },
    {
        name: "q8",
        message: "Which TypeScript feature allows for checking the type of a variable at runtime?",
        type: "list",
        choices: ["Type guard", "Runtime type", "Dynamic type", "Typeof"]
    },
    {
        name: "q9",
        message: "What TypeScript compiler option ensures strict type checking?",
        type: "list",
        choices: ["--strict",
            "--strictTypes",
            "--typeCheck",
            "--enforceTypes"]
    },
    {
        name: "q10",
        message: "How do you define an optional parameter in the TypeScript function?",
        type: "list",
        choices: ["function foo(param: string?)",
            "function foo(param?: string)",
            "function foo(param string=)",
             "function foo(param string?)"]
    },
])

let total = 10
let score = 0

for (const question in correctAnswers){
    if(QuizAnswers[question] === correctAnswers[question]){
        score++
    }
}
console.log(`You got ${score} marks out of ${total}`);





