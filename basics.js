

// console.log(10)

// console.log("Hello World")

// console.log("Welcome to Javascript", "Javascript is a programming language")

// // alert("This is an alert box")


// // This is a single line comment


// // variables and data types 


// //  variables are like containers that store data values. 
// //  In JavaScript, you can declare a variable using the var, let, or const keyword.



// var age = 30  



// {
//    var username = "John Doe" 
//    username = "Jane Daoe" 
//    var username = "Alice"
// }



// {
//     console.log(username)
// }


// //  var has global scope and the variables can be redeclared and reassigned.



// {
//    let city = "New York" 
//    city = "San Francisco"
// //    let city = "Chicago"
//    console.log(city)
// }

// {
//     let city = "Los Angeles"
//     console.log(city)
// }

// // let has block scope and the variables cannot be redeclared but can be reassigned


// const country = "USA"

// {
    
//     // country = "Canada"
// } 

// {
//     console.log(country)
// }


// //  some rules and conventions for naming variables in JavaScript:
// // 1. Variable names must start with a letter, underscore (_), or dollar sign ($).
// // 2. Variable names can contain letters, digits, underscores, and dollar signs.
// // 3. Variable names are case-sensitive (e.g., myVariable and myvariable are different).
// // 4. Avoid using reserved keywords as variable names (e.g., var, let, const, if, else, etc.).
// // 5. Use meaningful and descriptive names for variables to improve code readability.
// // 6. Follow a consistent naming convention (e.g., camelCase for variables and functions).

// console.log("Hello")
// console.log(10)



// let a = "Harsh";
// console.log(a)


// console.log("The value of a is:", a)
// // we can use comma to print multiple values in a single console.log statement.


// //  we can also use plus operator to concatenate strings and variables in console.log statement.
// console.log("The value of a is: " + a)


// let num1 = 20;
// let num2 = 30;

// let sum = num1+num2

// console.log("The sum of num1 and num2 is: " + sum)

// console.log("The sum of" , num1 , "and" , num2 , "is:" , sum) 


// // Template literals (template strings) best and easy way to embed variables and expressions in strings.

// console.log(`The sum of ${num1} and ${num2} is: ${sum}`)


// console.log(`${10+20}`)





//  Data types - 
//  data types are the different types of values that can be stored and manipulated in a programming language.
//  In JavaScript, there are several data types categorized into two main parts - 
//  Primitive and Non-primitive data types.

// 1. Primitive data types - 
//  the data types that represent a single value and are immutable (cannot be changed).
//  a. String - represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
//  b. Number - represents numeric values, including integers and floating-point numbers.
//  c. Boolean - represents a logical value that can be either true or false.
//  d. Null - represents the intentional absence of any object value.
//  e. Undefined - represents a variable that has been declared but has not been assigned a value.


//  2. Non-primitive data types - 
//  the data types that can store multiple values and are mutable (can be changed).
//  a. Object - represents a collection of key-value pairs, where each key is a string and the value can be of any data type.
//  b. Array - represents an ordered list of values, which can be of any data type.
//  c. Function - represents a reusable block of code that performs a specific task.




// let name = "Harsh"

// let age = 30

// let isStudent = true

// let address = null

// let phoneNumber ;

// console.log("Type of variable name is: ", typeof(name))
// console.log("Type of variable age is: ", typeof(age))
// console.log("Type of variable isStudent is: ", typeof(isStudent))
// console.log("Type of variable address is: ", typeof(address))
// console.log("Type of variable phoneNumber is: ", typeof(phoneNumber))



//  OPERATORS - 
//  operators are symbols or keywords that perform specific operations on one or more operands (values or variables) and return a result.
//  In JavaScript, there are several types of operators categorized into different groups -
//  1. Arithmetic operators - are used to perform mathematical operations on numbers.
//  a. Addition (+) - adds two operands together.
// b. Subtraction (-) - subtracts the second operand from the first operand.
// c. Multiplication (*) - multiplies two operands together.
// d. Division (/) - divides the first operand by the second operand.
// e. Modulus (%) - returns the remainder of the division of the first operand by the second operand.
// f. Exponentiation (**) - raises the first operand to the power of the second operand.



// let num1 = 10;
// let num2 = 3;

// console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`)

// console.log(`The subtraction of ${num1} and ${num2} is: ${num1 - num2}`)

// console.log(`The multiplication of ${num1} and ${num2} is: ${num1 * num2}`)

// console.log(`The division of ${num1} and ${num2} is: ${num1 / num2}`)

// console.log(`The modulus of ${num1} and ${num2} is: ${num1 % num2}`)

// console.log(`The exponentiation of ${num1} and ${num2} is: ${num1 ** num2}`)


// //  Increment (++) and Decrement (--) operators - are used to increase or decrease the value of a variable by 1, respectively.


// // let val = 10


// // // console.log(++val)



// // console.log(val++)



// // console.log(val)




// // 2. Assignment operators - are used to assign values to variables.
// // a. Assignment (=) - assigns the value of the right operand to the left operand.
// // b. Addition assignment (+=) - adds the value of the right operand to the left operand and assigns the result to the left operand.    
// // c. Subtraction assignment (-=) - subtracts the value of the right operand from the left operand and assigns the result to the left operand.
// // d. Multiplication assignment (*=) - multiplies the left operand by the value of the right operand and assigns the result to the left operand.
// // e. Division assignment (/=) - divides the left operand by the value of the right operand and assigns the result to the left operand.
// // f. Modulus assignment (%=) - calculates the modulus of the left operand by the value of the right operand and assigns the result to the left operand.


// let x = 11;
// x += 5

// console.log(x)



// let y = 20
//  y -= 10

//  console.log(y)


//  let z = 12
//  z *=3
//  console.log(z)


//  let m = 15
//  m /= 5
//  console.log(m)

//  let n = 10
//  n %= 3
//  console.log(n)

//  let p = 2
//  p **=3
//  console.log(p)


// //  3. Comparison operators - are used to compare two values and return a boolean result (true or false).
// // a. Equal to (==) - returns true if the operands are equal (after type coercion).
// // b. Strict equal to (===) - returns true if the operands are equal and of the same type.
// // c. Not equal to (!=) - returns true if the operands are not equal (after type coercion).
// // d. Strict not equal to (!==) - returns true if the operands are not equal or not of the same type.
// // e. Greater than (>) - returns true if the left operand is greater than the right operand.
// // f. Less than (<) - returns true if the left operand is less than the right operand.
// // g. Greater than or equal to (>=) - returns true if the left operand is greater than or equal to the right operand.
// // h. Less than or equal to (<=) - returns true if the left operand is less than or equal to the right operand.


// //  == ,  === , !=, !==, >, <, >=, <=

// // let a = 10;
// // let b = 40;

// // console.log(a==b)

// // let a = 10;
// // let b = '10';

// // console.log(a === b)


// let a = 10;
// let b = '10';

// console.log(a!=b)
// console.log(a!==b)



// //  4. Logical operators - are used to combine multiple conditions and return a boolean result (true or false).
// // a. Logical AND (&&) - returns true if both operands are true.
// // b. Logical OR (||) - returns true if at least one of the operands is true.
// // c. Logical NOT (!) - returns true if the operand is false, and false if the operand is true.



// let num = 505;

// console.log(num > 10 && num %2 === 0 && num < 200)

// //  and only returns true if all the conditions are true, even if one condition is false it will return false.

// console.log(num > 10 || num %2 === 0 || num < 200)

// //  or returns true if at least one of the conditions is true, it will only return false if all the conditions are false.


// console.log(!(num>10))





//  CONDITIONAL STATEMENTS - 
//  conditional statements are the decision-making statements that allow you to execute different blocks of code based on the different conditions. In js we have four types of conditional statements - if, if-else, else if ladder statements, and switch statements.

// 1. if statement - is used to execute a block of code if a specified condition is true.

// let age = 2;

// // if(age >= 18){
// //     console.log("You are an adult.")
// // }


//  let userAge = prompt("Enter your age:")
// //  console.log("User age is: ", userAge)


// if(userAge >= 18){
//     console.log("You are an adult.")
//}



// 2. if-else statement - is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.


let age = 12

if(age >= 18){
    console.log("You are an adult.")
}
else{
    console.log("You are not an adult.")
}



// 3. else if ladder statement - is used to execute one block of code among multiple conditions. It allows you to check multiple conditions sequentially and execute the corresponding block of code for the first condition that evaluates to true.

// let marks = 85;
// let attendance = 80

// if(marks >=90 && attendance >= 75){
//     console.log("Grade: A")
// }
// else if(marks >= 80 && attendance >= 75){
//     console.log("Grade: B")
// }
// else if(marks >= 70 && attendance >= 75){
//     console.log("Grade: C")
// }
// else if(marks >= 60 && attendance >= 75){
//     console.log("Grade: D")
// }
// else if (marks >= 50 && attendance >= 75){
//     console.log("Grade: E")
// }
// else{
//     console.log("Fail")
// }


// 4. switch statement - is used to perform different actions based on different conditions. It is an alternative to multiple if-else statements when you have a single variable that you want to compare against multiple values.


// let day = prompt("Enter a number from 1 to 7 to get the corresponding day of the week:");

// switch(day){
//     case '1':
//         console.log("Monday")
//         break
//     case '2':
//         console.log("Tuesday")
//         break
//     case '3':
//         console.log("Wednesday")
//         break
//     case '4':
//         console.log("Thursday")
//             break;
//     case '5':
//         console.log("Friday")
//             break;
//     case '6':
//         console.log("Saturday")
//             break;
//     case '7': 
//         console.log("Sunday")
//             break;
//     default:
//         console.log("Invalid input. Please enter a number from 1 to 7.")

//     }




// let num1 = prompt("Enter the first number:")
// let num2 = prompt("Enter the second number:")
// sum = num1 + num2
// console.log(`The sum of ${num1} and ${num2} is: ${sum}`)


//  Type Casting  - converting a value from one data type to another. In JavaScript, we have two types of type casting - implicit (Type Coercion) and explicit (Type conversion) type casting.

//  1. Type Coercion (Implicit type casting) - is the automatic conversion of values from one data type to another by JavaScript when performing operations between different data types.

// 2. Type Conversion (Explicit type casting) - is the manual conversion of values from one data type to another using built-in functions or methods in JavaScript, such as Number(), String()etc.



// Type Coercion examples -
let val = "10"

console.log(val + 5) //105
// when we use + operator with a string and a number, JavaScript converts the number to a string and concatenates them together, resulting in "105".

console.log(val - 5) //5
console.log(val * 2) //20
// when we use - operator with a string and a number, JavaScript converts the string to a number and performs the subtraction, resulting in 5.
// when we use * operator with a string and a number, JavaScript converts the string to a number and performs the multiplication, resulting in 20.



let val1 = Number(prompt("Enter number 1:"))
let val2 = Number(prompt("Enter number 2:"))

let sum = val1+ val2
console.log(`The sum of ${val1} and ${val2} is: ${sum}`)




// Number  function - convert a value from a string to a number. If the value cannot be converted to a number (it contain non-digit characters), it returns NaN (Not a Number).

// parseInt function - converts a string to an integer. It parses the string until it encounters a non-digit character and returns the integer value. If the string does not start with a digit, it returns NaN.



