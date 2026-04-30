// ============================================================
// JAVASCRIPT FUNCTIONS - Complete Guide
// ============================================================

// Functions are reusable blocks of code that perform a specific task.
// They help avoid repetition and keep code organized.


// ============================================================
// 1. FUNCTION DECLARATION
// ============================================================
// A function declaration is how you CREATE a function in JavaScript.
// Think of it like writing a recipe — you write the steps once,
// then you can "cook" (run) it as many times as you want.
//
// Syntax:
//   function functionName() {
//       // code to run
//   }
//
// To actually RUN the function, you must CALL it by writing its name
// followed by parentheses: functionName()
// Without calling it, the code inside never executes.

function greet() {
    console.log("Hello, World!");
}

greet(); // calling / invoking the function — this is what actually runs it


// ============================================================
// 2. PARAMETERS vs ARGUMENTS
// ============================================================
// Sometimes a function needs information from outside to do its job.
// That's where parameters and arguments come in.
//
// PARAMETER — a placeholder variable you define inside the function's

//
// ARGUMENT  — the actual value you pass in when you CALL the function.
//             It fills that empty box.
//
// Example analogy:
//   Parameter = the blank on a form that says "Name: ____"
//   Argument  = what you write in that blank, e.g. "John"
//
// You can have as many parameters as you need, separated by commas.

function greetUser(name) {          // "name" is a parameter
    console.log("Welcome, " + name);
}

greetUser("John");   // "John" is an argument — it gets assigned to "name"
greetUser("Sara");   // "Sara" is an argument — same function, different value


// ============================================================
// 3. MULTIPLE PARAMETERS & RETURN VALUE
// ============================================================
// A function can accept more than one parameter — just separate them
// with commas inside the parentheses.
//
// The RETURN keyword:
//   By default, a function runs its code but doesn't give anything back.
//   "return" lets the function SEND A VALUE back to wherever it was called.
//   After "return" runs, the function stops immediately.
//
// Why is this useful?
//   Instead of just printing the result inside the function,
//   you can store the result in a variable and use it anywhere in your code.
//
//   Without return:  function runs → result is lost
//   With return:     function runs → result is handed back → you save it

function add(num1, num2) {       // two parameters: num1 and num2
    let sum = num1 + num2;
    return sum;                  // sends the result back to the caller
}

let result = add(8, 7);          // the returned value (15) is stored in "result"
console.log("The sum is: " + result);  // 15


