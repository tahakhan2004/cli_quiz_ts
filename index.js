#! /usr/bin/env node
// import inquirer from "inquirer"
// const correctAnswers: any = {
//     q1: "Static Typing",
//     q2: "dynamic",
//     q3: "readonly",
//     q4: "function myFunc(): void",
//     q5: "Both A and C",
//     q6: "To describe the shape of an object",
//     q7: "A type that can be one of several types",
//     q8: "Type guard",
//     q9: "--strict",
//     q10: "function foo(param?: string)"
// };
// const QuizAnswers = await inquirer.prompt([
//     {
//         name: "q1",
//         message: "What is TypeScript primarily used for?",
//         type: "list",
//         choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
//     },
//     {
//         name: "q2",
//         message: "Which of the following is NOT a valid TypeScript data type?",
//         type: "list",
//         choices: ["void", "any", "dynamic", "tuple"]
//     },
//     {
//         name: "q3",
//         message: "How do you denote a variable as readonly in TypeScript?",
//         type: "list",
//         choices: ["const", "static", "readonly", "fixed"]
//     },
//     {
//         name: "q4",
//         message: "How do you specify that a function does not return anything in TypeScript?",
//         type: "list",
//         choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
//     },
//     {
//         name: "q5",
//         message: "How do you define a custom type in TypeScript?",
//         type: "list",
//         choices: ["interface", "typedef", "type", "Both A and C"]
//     },
//     {
//         name: "q6",
//         message: "What is the primary purpose of TypeScript interfaces?",
//         type: "list",
//         choices: ["To create new classes", "To describe the shape of an object", "To generate HTML templates", "To manage asynchronous code"]
//     },
//     {
//         name: "q7",
//         message: "What is a union type in TypeScript?",
//         type: "list",
//         choices: ["A type that can be any value", "A type that can be one of several types", "A type that can be both a string and a number simultaneously", "A type that can be an object"]
//     },
//     {
//         name: "q8",
//         message: "Which TypeScript feature allows for checking the type of a variable at runtime?",
//         type: "list",
//         choices: ["Type guard", "Runtime type", "Dynamic type", "Typeof"]
//     },
//     {
//         name: "q9",
//         message: "What TypeScript compiler option ensures strict type checking?",
//         type: "list",
//         choices: ["--strict",
//             "--strictTypes",
//             "--typeCheck",
//             "--enforceTypes"]
//     },
//     {
//         name: "q10",
//         message: "How do you define an optional parameter in the TypeScript function?",
//         type: "list",
//         choices: ["function foo(param: string?)",
//             "function foo(param?: string)",
//             "function foo(param string=)",
//              "function foo(param string?)"]
//     },
// ])
// let total = 10
// let score = 0
// for (const question in correctAnswers){
//     if(QuizAnswers[question] === correctAnswers[question]){
//         score++
//     }
// }
// console.log(`You got ${score} marks out of ${total}`);
import inquirer from 'inquirer';
async function askForTime() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'hours',
            message: 'Enter the number of hours:',
            default: 0,
            validate: (input) => {
                const num = parseInt(input, 10);
                if (isNaN(num) || num < 0) {
                    return 'Please provide a non-negative integer for hours.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'minutes',
            message: 'Enter the number of minutes:',
            default: 0,
            validate: (input) => {
                const num = parseInt(input, 10);
                if (isNaN(num) || num < 0 || num >= 60) {
                    return 'Please provide an integer between 0 and 59 for minutes.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'seconds',
            message: 'Enter the number of seconds:',
            default: 0,
            validate: (input) => {
                const num = parseInt(input, 10);
                if (isNaN(num) || num < 0 || num >= 60) {
                    return 'Please provide an integer between 0 and 59 for seconds.';
                }
                return true;
            }
        }
    ]);
    return {
        hours: parseInt(answers.hours, 10),
        minutes: parseInt(answers.minutes, 10),
        seconds: parseInt(answers.seconds, 10)
    };
}
function formatTime(hours, minutes, seconds) {
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
function countdown(hours, minutes, seconds) {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + hours);
    endTime.setMinutes(endTime.getMinutes() + minutes);
    endTime.setSeconds(endTime.getSeconds() + seconds);
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = endTime.getTime() - now;
        if (remainingTime <= 0) {
            clearInterval(interval);
            console.clear();
            console.log("Time's up!");
        }
        else {
            const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            console.clear();
            console.log(`Countdown: ${formatTime(remainingHours, remainingMinutes, remainingSeconds)} remaining`);
        }
    }, 1000);
}
(async () => {
    try {
        const { hours, minutes, seconds } = await askForTime();
        countdown(hours, minutes, seconds);
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
})();
