//  String - strings are use for storing and manipulating text. They are sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Strings are immutable, which means that once a string is created, it cannot be changed. However, you can create new strings by concatenating existing strings or using string methods. Strings are commonly used for displaying messages, storing user input, and manipulating text in programming languages like JavaScript.


let text = "Hello, World!"

//  accessing string characters using index
console.log(text)

console.log(text[0])
console.log(text[6])
console.log(text[6])



//  String Properties and Methods

//  length property - returns the number of characters in a string
console.log(text.length)



//  toUpperCase() method - converts a string to uppercase letters
// toLowerCase() method - converts a string to lowercase letters
// concat() method - concatenates two or more strings and returns a new string

let str1 = "Hello"
let str2 = "World"

// console.log(str1.toUpperCase())
// console.log(str2.toLowerCase())
// console.log(str1.concat(str2))


//  includes method - checks if a string contains a specified substring and returns true or false

console.log(str1.includes("He l"))


//  indexOf() method - returns the index of the first occurrence of a specified substring in a string, or -1 if it is not found.

console.log(str1.indexOf("lo"))


// charAt() method - returns the character at a specified index in a string

console.log(str1.charAt(4))


// substring() method - returns a portion of a string between two specified indices

console.log(text.substring(0,6))


//  slice() method - returns a portion of a string between two specified indices, similar to substring() but can also accept negative indices

console.log(text.slice(0,6))

//  with negative indices
console.log(text.slice(-6))


//  split() method - splits a string into an array of substrings based on a specified separator

let sentence = "Hello, how are you?"


let word = sentence.split("o")
console.log(word)


//  trim() method - removes whitespace from both ends of a string

let str3 = "   Hello, World!   "
console.log(str3.trim())


//  pad methods - padStart() and padEnd() are used to pad a string with a specified character until it reaches a certain length.


let str4 = "9876543210"
console.log(str4.padStart(17, "+91"))



//  replace() method - replaces a specified value with another value in a string

let str6 = "I love JavaScript"
console.log(str6.replace("a", "o"))

console.log(str6.replaceAll("a", "o"))


