

// let myIn = setInterval(() => {
//     console.log("World")
// }, 1000);

// setTimeout(() => {
//     clearInterval(myIn);
// }, 10000)

// {
//     let vari = "jrjj";

//     var vari4 = "njmkx";
// }
// let hello= "Hjh";
// let hello = "hjh"
// console.log(hello1);

console.log("========== Creating Arrays ==========");
let numbers = [10, 20, 30, 40, 50];
let users = ["Alice", "Bob", "Charlie"];
console.log("Numbers:", numbers);
console.log("Users:", users);

console.log("\n========== Push and Pop ==========");
numbers.push(60);
console.log("After Push (60):", numbers);
numbers.pop();
console.log("After Pop:", numbers);

console.log("\n========== Slice, Splice, Concat ==========");
let sliced = numbers.slice(1, 3);
console.log("Slice (1,3):", sliced);

numbers.splice(2, 1, 99);
console.log("Splice (replace index 2 with 99):", numbers);

let combined = numbers.concat([70, 80]);
console.log("Concat [70,80]:", combined);

console.log("\n========== Every and Some ==========");
console.log("Every > 0:", numbers.every(n => n > 0));
console.log("Some > 50:", numbers.some(n => n > 50));

console.log("\n========== Filter, Find, FindIndex ==========");
console.log("Filter > 20:", numbers.filter(n => n > 20));
console.log("Find 99:", numbers.find(n => n === 99));
console.log("FindIndex 99:", numbers.findIndex(n => n === 99));

console.log("\n========== ForEach and Includes ==========");
numbers.forEach(n => console.log("ForEach Value:", n));
console.log("Includes 40:", numbers.includes(40));

console.log("\n========== IndexOf and Map ==========");
console.log("IndexOf 40:", numbers.indexOf(40));
console.log("Map (doubled):", numbers.map(n => n * 2));

// console.log("\n========== Implementing Login ==========");
// let loginUser = "admin";
// let loginPass = "1234";
// if (loginUser === "admin" && loginPass === "1234") {
//     console.log("Login Successful");
// } else {
//     console.log("Login Failed");
// }

// console.log("\n========== Implementing Transfer ==========");
// let balance = 1000;
// let transferAmount = 200;
// if (balance >= transferAmount) {
//     balance -= transferAmount;
//     console.log("Transfer Successful. Remaining Balance:", balance);
// } else {
//     console.log("Insufficient Balance");
// }

console.log("\n========== Reverse and Sort ==========");
console.log("Reversed:", [...numbers].reverse());
console.log("Sorted Asc:", [...numbers].sort((a, b) => a - b));

console.log("\n========== JavaScript Data Types ==========");
let str = "Hello";
let num = 25;
let bool = true;
let undef;
let nul = null;
let obj = { name: "John" };
let arr = [1, 2, 3];
console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Object:", obj);
console.log("Array:", arr);

console.log("\n========== typeof, undefined vs null ==========");
console.log("typeof str:", typeof str);
console.log("typeof undefined:", typeof undef);
console.log("typeof null:", typeof nul); // JS bug

console.log("\n========== toString() ==========");
console.log("Number toString():", num.toString());

console.log("\n========== Number() ==========");
console.log("Number('123'):", Number("123"));

console.log("\n========== parseInt() and parseFloat() ==========");
console.log("parseInt('45.67'):", parseInt("45.67"));
console.log("parseFloat('45.67'):", parseFloat("45.67"));

console.log("\n========== Unary Operator ==========");
console.log("+'500':", +"500");

console.log("\n========== toFixed() ==========");
console.log("(12.3456).toFixed(2):", (12.3456).toFixed(2));

console.log("\n========== toUpperCase() and toLowerCase() ==========");
console.log("UpperCase:", str.toUpperCase());
console.log("LowerCase:", str.toLowerCase());

console.log("\n========== length, charAt(), charCodeAt() ==========");
console.log("Length:", str.length);
console.log("charAt(1):", str.charAt(1));
console.log("charCodeAt(1):", str.charCodeAt(1));

console.log("\n========== substr(), indexOf(), lastIndexOf() ==========");
console.log("substr(1,3):", str.substring(1, 3));
console.log("indexOf('l'):", str.indexOf("l"));
console.log("lastIndexOf('l'):", str.lastIndexOf("l"));

console.log("\n========== replace(), split(), trim(), concat() ==========");
console.log("replace('Hello','Hi'):", str.replace("Hello", "Hi"));
console.log("split(''):", str.split(""));
console.log("trim():", "   Hello World   ".trim());
console.log("concat():", "Hello".concat(" ", "World"));

console.log("\n========== new Date() ==========");
let currentDate = new Date();
console.log("Current Date:", currentDate);



