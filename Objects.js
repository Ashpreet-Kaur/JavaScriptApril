// Object - stores the data in form of key-value pairs. 

let students = {
    name: "John",
    age: 20,
    course: "Computer Science",
    isGraduated: false,
    marks: [85, 90, 78]
}

// console.log(students)

// accessing the values of an object using dot notation
console.log(students.name)
console.log(students.age)

// accessing the values of an object using bracket notation
console.log(students["course"])
console.log(students["isGraduated"])
console.log(students["marks"])



//  changing the value of an object property
students.name = "Jane"
students.email = "jane@gmail.com"
console.log(students)


// deleteing a property from an object
delete students.isGraduated
console.log(students)


//  Object methods 

// console.log(Object.keys(students))
// console.log(Object.values(students))
console.log(Object.entries(students))

//  looping through an object using for...in loop


//  for in loop is used to loop through the properties of an object

for(let item in students){
    console.log(students[item]) // prints the keys of the object
   
}

