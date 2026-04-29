//  An array is a non-primitive data type that can store multiple values in a single variable. It is a collection of elements, where each element can be of any data type, such as numbers, strings, objects, or even other arrays. Arrays are ordered, meaning that the elements are stored in a specific sequence and can be accessed using their index. The index of the first element is 0, the second element is 1, and so on. Arrays are commonly used to store and manipulate lists of data in programming languages like JavaScript.


let myArray = [1, 2, 3, 4, 5]


// accessing array elements using index

console.log(myArray[0])
console.log(myArray[4])


//  Arrays are mutable, which means that you can change the elements of a array after it has been created.

//  changing the value of an element with the help of index

myArray[2] = 30

console.log(myArray)


//  adding an element to an array
myArray[5] = 6
console.log(myArray)



//  accessing the whole array elements individually

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])
// console.log(myArray[5])



// for(let i=0; i<6; i++){
//     console.log(myArray[i])
// }



// let i =0;
// while(i<6){
//    console.log(myArray[i])
//     i++;
// }



// printing only the even numbers of an array

for(let i=0; i<myArray.length; i++){
    if(myArray[i]%2===0){
        console.log(myArray[i])
    }
    
}




//  check if name entered by user exist in an array or not 


let names = ["John", "Alice", "Bob"]

let userInput = prompt("Enter a name to search in the array")

for(let i=0; i<names.length; i++){
    if(names[i] === userInput){
        console.log("Name found in the array")
        break; // exit the loop once the name is found
    }
    else{
        console.log("Name not found in the array")
    }
}


// all methods are functions but all functions are not methods
//  array properties and methods 



//  1. property - length
console.log(myArray.length)