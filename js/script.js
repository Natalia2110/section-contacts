// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// ============================
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// const value1 = 2;
// const value2 = 30.3;
// const value3 = 4;
// console.log(Math.floor(value));
// console.log(Math.floor(value1));
// console.log(Math.ceil(value));
// console.log(Math.ceil(value1));
// console.log(Math.ceil(value2));
// console.log(Math.floor(value2));
// console.log(Math.round(value));
// console.log(Math.round(value2));
// console.log(Math.min(value, value1, value2));
// console.log(Math.pow(value3, value1));
// console.log((Math.random()*(20-1)+1).toFixed(1));
// console.log(Math.round(Math.random()*(20-1)+1));

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// // const totalBots
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// const userAnswer = prompt("Яка офіційна назва JavaScriht?");

// if (userAnswer === "ECMAScript") {
//     alert("Правильно!");
// } else {
//     alert("Не знаете ECMAScript?");
// }

// if (userAnswer === "ECMAScript")   alert("Правильно!");
// else   alert("Не знаете ECMAScript?");


// 
// let msg = "";

// userAnswer === "ECMAScript"

//     : (msg = "Не знаете ECMAScript?");

// alert (msg);

// ===============================================

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

const value = 27.5;
console.log(Math.floor(value))