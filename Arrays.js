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


// let names = ["John", "Alice", "Bob"]

// let userInput = prompt("Enter a name to search in the array")

// for(let i=0; i<names.length; i++){
//     if(names[i] === userInput){
//         console.log("Name found in the array")
//         break; // exit the loop once the name is found
//     }
//     else{
//         console.log("Name not found in the array")
//     }
// }


// all methods are functions but all functions are not methods
//  array properties and methods 



//  1. property - length
// console.log(myArray.length)


// 2. methods 
// push() - adds an element to the end of the array 


console.log(myArray)



myArray.push(7, 8)
console.log(myArray)


// pop() - removes the last element from the array 

myArray.pop()
console.log(myArray)


// unshift() - adds an element to the beginning of the array

myArray.unshift(1000)
console.log(myArray)


// shift() - removes the first element from the array
myArray.shift()
console.log(myArray)

// indexOf() - returns the index of the first occurrence of a specified element in the array, or -1 if it is not found.

console.log(myArray.indexOf(300))


//  includes() - checks if an array includes a certain element, returning true or false as appropriate.

console.log(myArray.includes(7))


// concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let mergedarr = arr1.concat(arr2)


console.log(mergedarr)


//  slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

console.log(mergedarr.slice(2,6))


// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//  syntax - array.splice(start, deleteCount, item1, item2, ...)


mergedarr.splice(3,1,400);
console.log(mergedarr)
mergedarr.splice(3,1)
console.log(mergedarr)


// forEach() - executes a provided function once for each array element.
// for(let i=0; i<mergedarr.length; i++){
//     console.log(mergedarr[i])
// }


// mergedarr.forEach(function(){
//     console.log("This is forEach method.")
// })'



 mergedarr.forEach((e)=>{
     console.log(e)
})



let nums = [10,20,30,40,50]


// let mutlipliedNums = []

//  for(let i=0; i<nums.length; i++){
//         mutlipliedNums.push(nums[i]*10)
//  }

//  console.log(mutlipliedNums)



// map() - is used when you want to create a new array by applying a function to each element of an existing array. It takes a callback function as an argument and returns a new array with the results of calling the provided function on every element in the calling array.

let multipliedNums = nums.map((el)=>{
    return el*10
})

console.log(multipliedNums)


// filter() - creates a new array with all elements that pass the test implemented by the provided function. It takes a callback function as an argument and returns a new array containing only the elements that satisfy the condition specified in the callback function.

let arrayy = [1,2,3,4,5,6,7,8,9,10]

let evenNumbers = arrayy.filter((el)=>{
    return el%2===0
})

console.log(evenNumbers)




// Questions
// 1.Create an array of 5 fruits. Add a new fruit to the end, then remove the first fruit. Log the result.
// 2. . Given ["apple", "banana", "mango", "kiwi"], check if "mango" exists. If it does, log its index; otherwise log "Not found".
// 3. Given [10, 20, 30, 40, 50], extract the middle three elements using slice().
// 4. Given ["a","b","c","d","e"], replace "c" and "d" with "x" and "y" using splice().
// 5. Use forEach() to print the square of each number in [1, 2, 3, 4, 5].
// 6. Use filter() to get all numbers greater than 15 from [5, 10, 15, 20, 25, 30].
// 7.  From [1,2,3,4,5,6,7,8,9,10], use filter() to get odd numbers, then use map() to triple each one.