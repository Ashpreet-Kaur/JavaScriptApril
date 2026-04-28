

//  Looping Statement allow us to repeat a block of code multiple times, which is useful for tasks that require repetition, such as iterating over arrays, performing calculations, or generating output. There are several types of loops in JavaScript, including for loops, while loops, and do-while loops.


//  while loop :
//  syntax:
//  while(condition){
//     // code to be executed }


// let num = 1;

// while(num <= 5){
//     console.log(num);
//     num++;
// }


//  for loop:
// syntax: for(initialization; condition; inc/dec){
//   // code to be executed}

// let i;
// for(i=1; i<=5; i++){
//     console.log(i);
// }


// login validation using for and while loop

const username = "admin";
const password = "admin123";


// let inputUsername = prompt("Enter username:");
// let inputPassword = prompt("Enter password:");


// for(let i=1; i<=4 ; i++){
//     if(inputUsername === username && inputPassword === password){
//         console.log("Login successful!");
//          break;
//     }
//     else{
//         console.log("Login Failed") ;
//         inputUsername = prompt("Enter username:");
//         inputPassword = prompt("Enter password:");
//     }
// }


// while(inputUsername !== username || inputPassword !== password){
//     console.log("Login Failed") ;
//     inputUsername = prompt("Enter username:");
//     inputPassword = prompt("Enter password:");
// }
// console.log("Login successful!");


//  for loop is used when the number of iterations(how many times the loop should run) is known beforehand , and while loop is used when the number of iterations is not known and we want to repeat the code until a certain condition is met.
//  In the above example, we can use a for loop if we want to limit the number of login attempts (e.g., 3 attempts), but if we want to allow unlimited attempts until the correct credentials are entered, a while loop is more appropriate.



//  do-while loop:
// syntax :
//  do{
//   // code to be executed
//  } while(condition);


// let j=1;

// do{
//     console.log(j)
//     j++;
// }
// while(j<1)


    // while(j<1){
    //     console.log(j);
    //     j++;
    // }



     let inputUsername;
     let inputPassword;
    do{
        inputUsername = prompt("Enter username:");
        inputPassword = prompt("Enter password:");
    }
    while(inputUsername !== username || inputPassword !== password);

    console.log("Login successful!");



    //  do while is used when we want to execute the code block at least once, regardless of the condition. The code block will be executed first, and then the condition will be checked. If the condition is true, the loop will continue; if it's false, the loop will stop. 

// Questions:
    // 1. Modify the login validation for loop so that after 3 failed attempts, it prints "Account locked!" and stops — even if the user hasn't entered correct credentials.
    // 2. Write a program that asks the user to enter numbers one by one. Stop when they enter 0
    