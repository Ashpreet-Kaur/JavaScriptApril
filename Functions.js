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




//  Function declaration is way of writing a function in JavaScript. It consists of the "function" keyword, followed by the name of the function, parentheses for parameters, and curly braces for the function body. The code inside the function body is what gets executed when the function is called.




//  Function expression is another way to define a function in JavaScript. Instead of using the "function" keyword, you can assign an anonymous function (a function without a name) to a variable. This allows you to create functions that can be stored in variables, passed as arguments, or returned from other functions.


let greetexp = function (){
    console.log("This is an function expression.")
}

greetexp()


let sumexp = function (a,b){
    console.log(`The sum of ${a} and ${b} is: ${a+b}`)
    return a+b
}

sumexp(5,10);



// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a design pattern that allows you to execute a function immediately after its creation, without needing to call it separately.

// (function(){
//     alert("This is an IIFE function.")
// })()


 
//  Arrow function is a concise way to write functions in JS.

let greetArrow = (a,b) => 
    {
        console.log("This is an arrow function.")
        console.log(`The sum of ${a} and ${b} is: ${a+b}`)
        return a+b
    }
greetArrow(5,10)



//  Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations, such as API calls or event handling, by providing a way to execute code once the operation is finished.


//  setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay. It takes two parameters: the first is the function to be executed, and the second is the delay in milliseconds.

// SetInterval is a built-in JavaScript function that allows you to execute a function repeatedly at specified intervals. It takes two parameters: the first is the function to be executed, and the second is the interval in milliseconds. The function will continue to execute until clearInterval is called with the interval ID returned by setInterval.


function displayMessage(){
    console.log("This message will be displayed after 2 seconds.")
}

setInterval(displayMessage, 2000)




