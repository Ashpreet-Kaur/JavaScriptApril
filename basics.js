// ============================================================
//  JAVASCRIPT BASICS — BEGINNER'S REFERENCE NOTES
//  Topics: Output, Variables, Data Types, Operators,
//          Conditional Statements, Type Casting
// ============================================================


// ============================================================
//  SECTION 1 — OUTPUT & COMMENTS
// ============================================================
//  console.log() prints values to the browser / Node console.
//  It is the main tool you use to inspect your code while learning.
//  Real-life: like reading a label on a box before deciding what
//             to do with it.
// ------------------------------------------------------------

// console.log(10)
// console.log("Hello World")
// console.log("Welcome to Javascript", "Javascript is a programming language")
// alert("This is an alert box")   // pops up a dialog box in the browser

//  — Comment syntax —
//  Single-line comment  →  // anything after the slashes is ignored
//  Multi-line comment   →  /* write across
//                             many lines */


// ============================================================
//  SECTION 2 — VARIABLES & SCOPE
// ============================================================
//  A variable is a named container that stores a value.
//  Real-life: like a labeled jar on a shelf —
//    the label is the variable name ("cookies"),
//    and what is inside is the value (12).
//
//  3 keywords to declare variables:
//  ┌─────────┬──────────────────┬───────────────┬──────────────┐
//  │ Keyword │  Scope           │ Re-declarable │ Re-assignable│
//  ├─────────┼──────────────────┼───────────────┼──────────────┤
//  │  var    │  Function/Global │      ✓        │      ✓       │
//  │  let    │  Block           │      ✗        │      ✓       │
//  │  const  │  Block           │      ✗        │      ✗       │
//  └─────────┴──────────────────┴───────────────┴──────────────┘
//  Use let and const in modern code. Avoid var.
// ------------------------------------------------------------

// — var (older style, function-scoped) —
// var myAge = 30

// {
//    var username = "John Doe"
//    username = "Jane Doe"       // re-assignment ✓
//    var username = "Alice"      // re-declaration ✓ (var allows this)
// }
// {
//    console.log(username)       // "Alice" — var leaks out of its block!
// }

// — let (block-scoped, preferred for values that change) —
// {
//    let city = "New York"
//    city = "San Francisco"      // re-assignment ✓
//    // let city = "Chicago"     // ✗ SyntaxError: already declared in this block
//    console.log(city)
// }
// {
//    let city = "Los Angeles"    // ✓ a different block = a fresh scope
//    console.log(city)
// }

// — const (block-scoped, for values that never change) —
// const country = "USA"
// {
//    // country = "Canada"       // ✗ TypeError: const cannot be re-assigned
// }
// {
//    console.log(country)        // "USA"
// }

//  — Naming rules & conventions —
//  1. Must start with a letter, _ , or $
//  2. Can contain letters, digits, _ and $
//  3. Case-sensitive: myAge ≠ myage
//  4. Cannot use reserved words: if, let, const, return, etc.
//  5. Be descriptive: totalPrice not tp
//  6. Use camelCase: firstName, shoppingCartTotal

// — Printing a variable —
// let personName = "Harsh"
// console.log(personName)
// console.log("The value of personName is:", personName)
// console.log("The value of personName is: " + personName)  // + concatenates strings

// — Template literals (backtick strings) — easiest way to mix text & variables —
// let printNum1 = 20
// let printNum2 = 30
// let printSum  = printNum1 + printNum2
// console.log(`The sum of ${printNum1} and ${printNum2} is: ${printSum}`)
// console.log(`${10 + 20}`)   // expressions work inside ${ }


// ============================================================
//  SECTION 3 — DATA TYPES
// ============================================================
//  A data type describes the kind of value a variable holds.
//  Real-life: like different types of containers —
//    a bottle holds liquids, a box holds solids, a file holds text.
//
//  PRIMITIVE  (single, immutable values — compared by value)
//    String    — text:              "Alice", 'hello', `world`
//    Number    — any number:        42, 3.14, -7
//    Boolean   — logic:             true / false  (is the user logged in?)
//    Null      — intentional empty: let selectedItem = null  (cart is empty)
//    Undefined — not yet assigned:  let phoneNumber  (field not filled yet)
//
//  NON-PRIMITIVE  (can hold many values — compared by reference)
//    Object    — key-value pairs:   { name: "Alice", age: 25 }
//    Array     — ordered list:      ["red", "green", "blue"]
//    Function  — reusable block of code
// ------------------------------------------------------------

// let fullName    = "Harsh"
// let dataAge     = 30
// let isStudent   = true
// let address     = null        // intentional empty — no address provided yet
// let phoneNumber               // undefined — variable declared but not assigned

// console.log("Type of fullName:",    typeof fullName)      // "string"
// console.log("Type of dataAge:",     typeof dataAge)       // "number"
// console.log("Type of isStudent:",   typeof isStudent)     // "boolean"
// console.log("Type of address:",     typeof address)       // "object"  ← known JS quirk
// console.log("Type of phoneNumber:", typeof phoneNumber)   // "undefined"


// ============================================================
//  SECTION 4 — OPERATORS
// ============================================================

// ── 4a. Arithmetic Operators ────────────────────────────────
//  Perform math on numbers.
//  Real-life: calculating the total cost in a shopping cart.
//
//  +   addition          price + tax
//  -   subtraction       total - discount
//  *   multiplication    price * quantity
//  /   division          total / numberOfPeople
//  %   modulus (remainder)  10 % 3 = 1   (handy for even/odd checks)
//  **  exponentiation    2 ** 8 = 256

// let opNum1 = 10
// let opNum2 = 3

// console.log(`${opNum1} + ${opNum2} = ${opNum1 + opNum2}`)    // 13
// console.log(`${opNum1} - ${opNum2} = ${opNum1 - opNum2}`)    // 7
// console.log(`${opNum1} * ${opNum2} = ${opNum1 * opNum2}`)    // 30
// console.log(`${opNum1} / ${opNum2} = ${opNum1 / opNum2}`)    // 3.333...
// console.log(`${opNum1} % ${opNum2} = ${opNum1 % opNum2}`)    // 1
// console.log(`${opNum1} ** ${opNum2} = ${opNum1 ** opNum2}`)  // 1000

//  Increment (++) and Decrement (--) operators
//  ++  adds 1 to a variable      (like a page-view counter going up)
//  --  subtracts 1               (like a countdown timer)
//  Pre  (++incVal): increment first, then return the new value
//  Post (incVal++): return current value first, then increment

// let incVal = 10
// console.log(++incVal)   // 11 — pre-increment
// console.log(incVal++)   // 11 — post-increment (returns before adding)
// console.log(incVal)     // 12


// ── 4b. Assignment Operators ────────────────────────────────
//  Assign or update a variable's value in one step.
//  Real-life: adding money to a bank balance.
//
//  =    assign                   balance = 100
//  +=   add & assign             balance += 50  →  balance = balance + 50
//  -=   subtract & assign
//  *=   multiply & assign
//  /=   divide & assign
//  %=   modulus & assign
//  **=  exponent & assign

// let assignX = 11;  assignX += 5;   console.log(assignX)  // 16
// let assignY = 20;  assignY -= 10;  console.log(assignY)  // 10
// let assignZ = 12;  assignZ *= 3;   console.log(assignZ)  // 36
// let assignM = 15;  assignM /= 5;   console.log(assignM)  // 3
// let assignN = 10;  assignN %= 3;   console.log(assignN)  // 1
// let assignP = 2;   assignP **= 3;  console.log(assignP)  // 8


// ── 4c. Comparison Operators ────────────────────────────────
//  Compare two values and return true or false.
//  Real-life: checking if a user's age meets an entry requirement.
//
//  ==   equal (loose — ignores type)      "5" == 5   → true
//  ===  strict equal (checks type too)    "5" === 5  → false  ← always prefer this
//  !=   not equal (loose)
//  !==  strict not equal                              ← always prefer this
//  >    greater than
//  <    less than
//  >=   greater than or equal
//  <=   less than or equal
//
//  ⚠  Tip: always use === and !== to avoid unexpected type-coercion bugs.

// let compA = 10
// let compB = '10'
// console.log(compA == compB)    // true  (loose: string "10" coerced to number 10)
// console.log(compA === compB)   // false (strict: number ≠ string)
// console.log(compA != compB)    // false
// console.log(compA !== compB)   // true


// ── 4d. Logical Operators ───────────────────────────────────
//  Combine multiple conditions into one expression.
//  Real-life: loan approval — must be over 18 AND have a salary > 30,000.
//
//  &&  AND — true only if ALL conditions are true
//  ||  OR  — true if AT LEAST ONE condition is true
//  !   NOT — flips the boolean value  (!true → false)

// let score = 505
// console.log(score > 10 && score % 2 === 0 && score < 200)
//   // false — AND: ALL conditions must pass; score < 200 fails

// console.log(score > 10 || score % 2 === 0 || score < 200)
//   // true — OR: only one needs to pass; score > 10 passes

// console.log(!(score > 10))
//   // false — score IS > 10 (true), NOT flips it → false


// ============================================================
//  SECTION 5 — CONDITIONAL STATEMENTS
// ============================================================
//  Conditional statements let your program make decisions.
//  Real-life: if your balance >= ticket price → buy ticket,
//             else → show "Insufficient funds."
// ------------------------------------------------------------

// ── 5a. if statement ────────────────────────────────────────
//  Runs the block ONLY when the condition is true.

// let entryAge = Number(prompt("Enter your age:"))
// if(entryAge >= 18){
//     console.log("You are an adult.")
// }


// ── 5b. if-else statement ───────────────────────────────────
//  Runs one block if true, a different block if false.
//  Real-life: a light switch — if flipped on, light turns on; else, it stays off.

let age = 12   // try changing this value to see different results

if(age >= 18){
    console.log("You are an adult.")
}
else{
    console.log("You are not an adult.")
}


// ── 5c. else-if ladder ──────────────────────────────────────
//  Checks multiple conditions one after another — first match wins.
//  Real-life: a grading system — A, B, C, D, E or Fail.

// let marks = 85
// let attendance = 80

// if(marks >= 90 && attendance >= 75){
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
// else if(marks >= 50 && attendance >= 75){
//     console.log("Grade: E")
// }
// else{
//     console.log("Fail")
// }


// ── 5d. switch statement ────────────────────────────────────
//  Matches one variable against a set of fixed values.
//  Cleaner than a long if-else chain when comparing one variable to many values.
//  Real-life: choosing a day name from its number (1 → Monday, 2 → Tuesday …).
//  ⚠  Always add break; so only the matched case runs.

// let day = prompt("Enter a number 1-7 for the day of the week:")

// switch(day){
//     case '1': console.log("Monday");    break
//     case '2': console.log("Tuesday");   break
//     case '3': console.log("Wednesday"); break
//     case '4': console.log("Thursday");  break
//     case '5': console.log("Friday");    break
//     case '6': console.log("Saturday");  break
//     case '7': console.log("Sunday");    break
//     default:  console.log("Invalid input. Please enter a number from 1 to 7.")
// }


// — Quick exercise: prompt-based calculator —
// let calcNum1 = Number(prompt("Enter the first number:"))
// let calcNum2 = Number(prompt("Enter the second number:"))
// let calcSum  = calcNum1 + calcNum2
// console.log(`The sum of ${calcNum1} and ${calcNum2} is: ${calcSum}`)


// ============================================================
//  SECTION 6 — TYPE CASTING
// ============================================================
//  Type casting = converting a value from one data type to another.
//
//  Type Coercion   (implicit) — JavaScript converts automatically
//    Real-life: a vending machine that accepts coins and bills and
//               converts everything to internal credit on its own.
//
//  Type Conversion (explicit) — you convert manually with functions
//    Number("42")     → 42       string to number
//    Number("hello")  → NaN      non-numeric string → Not a Number
//    parseInt("42px") → 42       reads digits until the first non-digit
//    String(42)       → "42"     number to string
//    Boolean(0)       → false    falsy values: 0, "", null, undefined, NaN
// ------------------------------------------------------------

// — Type Coercion examples (implicit) —
let val = "10"

console.log(val + 5)   // "105" — + with a string means concatenation, not addition
console.log(val - 5)   //   5   — - forces "10" to become the number 10, then subtracts
console.log(val * 2)   //  20   — * forces "10" to become the number 10, then multiplies


// — Type Conversion examples (explicit) —
let val1 = Number(prompt("Enter number 1:"))
let val2 = Number(prompt("Enter number 2:"))
let sum  = val1 + val2
console.log(`The sum of ${val1} and ${val2} is: ${sum}`)

//  JAVASCRIPT BASICS — BEGINNER'S REFERENCE NOTES
//  Topics: Output, Variables, Data Types, Operators,
//          Conditional Statements, Type Casting
// ============================================================


// ============================================================
//  SECTION 1 — OUTPUT & COMMENTS
// ============================================================
//  console.log() prints values to the browser / Node console.
//  It is the main tool you use to inspect your code while learning.
//  Real-life: like reading a label on a box before deciding what
//             to do with it.
// ------------------------------------------------------------

// console.log(10)
// console.log("Hello World")
// console.log("Welcome to Javascript", "Javascript is a programming language")
// alert("This is an alert box")   // pops up a dialog box in the browser

//  — Comment syntax —
//  Single-line comment  →  // anything after the slashes is ignored
//  Multi-line comment   →  /* write across
//                             many lines */


// ============================================================
//  SECTION 2 — VARIABLES & SCOPE
// ============================================================
//  A variable is a named container that stores a value.
//  Real-life: like a labeled jar on a shelf —
//    the label is the variable name ("cookies"),
//    and what is inside is the value (12).
//
//  3 keywords to declare variables:
//  ┌─────────┬──────────────────┬───────────────┬──────────────┐
//  │ Keyword │  Scope           │ Re-declarable │ Re-assignable│
//  ├─────────┼──────────────────┼───────────────┼──────────────┤
//  │  var    │  Function/Global │      ✓        │      ✓       │
//  │  let    │  Block           │      ✗        │      ✓       │
//  │  const  │  Block           │      ✗        │      ✗       │
//  └─────────┴──────────────────┴───────────────┴──────────────┘
//  Use let and const in modern code. Avoid var.
// ------------------------------------------------------------

// — var (older style, function-scoped) —
// var myAge = 30

// {
//    var username = "John Doe"
//    username = "Jane Doe"       // re-assignment ✓
//    var username = "Alice"      // re-declaration ✓ (var allows this)
// }
// {
//    console.log(username)       // "Alice" — var leaks out of its block!
// }

// — let (block-scoped, preferred for values that change) —
// {
//    let city = "New York"
//    city = "San Francisco"      // re-assignment ✓
//    // let city = "Chicago"     // ✗ SyntaxError: already declared in this block
//    console.log(city)
// }
// {
//    let city = "Los Angeles"    // ✓ a different block = a fresh scope
//    console.log(city)
// }

// — const (block-scoped, for values that never change) —
// const country = "USA"
// {
//    // country = "Canada"       // ✗ TypeError: const cannot be re-assigned
// }
// {
//    console.log(country)        // "USA"
// }

//  — Naming rules & conventions —
//  1. Must start with a letter, _ , or $
//  2. Can contain letters, digits, _ and $
//  3. Case-sensitive: myAge ≠ myage
//  4. Cannot use reserved words: if, let, const, return, etc.
//  5. Be descriptive: totalPrice not tp
//  6. Use camelCase: firstName, shoppingCartTotal

// — Printing a variable —
// let personName = "Harsh"
// console.log(personName)
// console.log("The value of personName is:", personName)
// console.log("The value of personName is: " + personName)  // + concatenates strings

// — Template literals (backtick strings) — easiest way to mix text & variables —
// let printNum1 = 20
// let printNum2 = 30
// let printSum  = printNum1 + printNum2
// console.log(`The sum of ${printNum1} and ${printNum2} is: ${printSum}`)
// console.log(`${10 + 20}`)   // expressions work inside ${ }


// ============================================================
//  SECTION 3 — DATA TYPES
// ============================================================
//  A data type describes the kind of value a variable holds.
//  Real-life: like different types of containers —
//    a bottle holds liquids, a box holds solids, a file holds text.
//
//  PRIMITIVE  (single, immutable values — compared by value)
//    String    — text:              "Alice", 'hello', `world`
//    Number    — any number:        42, 3.14, -7
//    Boolean   — logic:             true / false  (is the user logged in?)
//    Null      — intentional empty: let selectedItem = null  (cart is empty)
//    Undefined — not yet assigned:  let phoneNumber  (field not filled yet)
//
//  NON-PRIMITIVE  (can hold many values — compared by reference)
//    Object    — key-value pairs:   { name: "Alice", age: 25 }
//    Array     — ordered list:      ["red", "green", "blue"]
//    Function  — reusable block of code
// ------------------------------------------------------------

// let fullName    = "Harsh"
// let dataAge     = 30
// let isStudent   = true
// let address     = null        // intentional empty — no address provided yet
// let phoneNumber               // undefined — variable declared but not assigned

// console.log("Type of fullName:",    typeof fullName)      // "string"
// console.log("Type of dataAge:",     typeof dataAge)       // "number"
// console.log("Type of isStudent:",   typeof isStudent)     // "boolean"
// console.log("Type of address:",     typeof address)       // "object"  ← known JS quirk
// console.log("Type of phoneNumber:", typeof phoneNumber)   // "undefined"


// ============================================================
//  SECTION 4 — OPERATORS
// ============================================================

// ── 4a. Arithmetic Operators ────────────────────────────────
//  Perform math on numbers.
//  Real-life: calculating the total cost in a shopping cart.
//
//  +   addition          price + tax
//  -   subtraction       total - discount
//  *   multiplication    price * quantity
//  /   division          total / numberOfPeople
//  %   modulus (remainder)  10 % 3 = 1   (handy for even/odd checks)
//  **  exponentiation    2 ** 8 = 256

// let opNum1 = 10
// let opNum2 = 3

// console.log(`${opNum1} + ${opNum2} = ${opNum1 + opNum2}`)    // 13
// console.log(`${opNum1} - ${opNum2} = ${opNum1 - opNum2}`)    // 7
// console.log(`${opNum1} * ${opNum2} = ${opNum1 * opNum2}`)    // 30
// console.log(`${opNum1} / ${opNum2} = ${opNum1 / opNum2}`)    // 3.333...
// console.log(`${opNum1} % ${opNum2} = ${opNum1 % opNum2}`)    // 1
// console.log(`${opNum1} ** ${opNum2} = ${opNum1 ** opNum2}`)  // 1000

//  Increment (++) and Decrement (--) operators
//  ++  adds 1 to a variable      (like a page-view counter going up)
//  --  subtracts 1               (like a countdown timer)
//  Pre  (++incVal): increment first, then return the new value
//  Post (incVal++): return current value first, then increment

// let incVal = 10
// console.log(++incVal)   // 11 — pre-increment
// console.log(incVal++)   // 11 — post-increment (returns before adding)
// console.log(incVal)     // 12


// ── 4b. Assignment Operators ────────────────────────────────
//  Assign or update a variable's value in one step.
//  Real-life: adding money to a bank balance.
//
//  =    assign                   balance = 100
//  +=   add & assign             balance += 50  →  balance = balance + 50
//  -=   subtract & assign
//  *=   multiply & assign
//  /=   divide & assign
//  %=   modulus & assign
//  **=  exponent & assign

// let assignX = 11;  assignX += 5;   console.log(assignX)  // 16
// let assignY = 20;  assignY -= 10;  console.log(assignY)  // 10
// let assignZ = 12;  assignZ *= 3;   console.log(assignZ)  // 36
// let assignM = 15;  assignM /= 5;   console.log(assignM)  // 3
// let assignN = 10;  assignN %= 3;   console.log(assignN)  // 1
// let assignP = 2;   assignP **= 3;  console.log(assignP)  // 8


// ── 4c. Comparison Operators ────────────────────────────────
//  Compare two values and return true or false.
//  Real-life: checking if a user's age meets an entry requirement.
//
//  ==   equal (loose — ignores type)      "5" == 5   → true
//  ===  strict equal (checks type too)    "5" === 5  → false  ← always prefer this
//  !=   not equal (loose)
//  !==  strict not equal                              ← always prefer this
//  >    greater than
//  <    less than
//  >=   greater than or equal
//  <=   less than or equal
//
//  ⚠  Tip: always use === and !== to avoid unexpected type-coercion bugs.

// let compA = 10
// let compB = '10'
// console.log(compA == compB)    // true  (loose: string "10" coerced to number 10)
// console.log(compA === compB)   // false (strict: number ≠ string)
// console.log(compA != compB)    // false
// console.log(compA !== compB)   // true


// ── 4d. Logical Operators ───────────────────────────────────
//  Combine multiple conditions into one expression.
//  Real-life: loan approval — must be over 18 AND have a salary > 30,000.
//
//  &&  AND — true only if ALL conditions are true
//  ||  OR  — true if AT LEAST ONE condition is true
//  !   NOT — flips the boolean value  (!true → false)

// let score = 505
// console.log(score > 10 && score % 2 === 0 && score < 200)
//   // false — AND: ALL conditions must pass; score < 200 fails

// console.log(score > 10 || score % 2 === 0 || score < 200)
//   // true — OR: only one needs to pass; score > 10 passes

// console.log(!(score > 10))
//   // false — score IS > 10 (true), NOT flips it → false


// ============================================================
//  SECTION 5 — CONDITIONAL STATEMENTS
// ============================================================
//  Conditional statements let your program make decisions.
//  Real-life: if your balance >= ticket price → buy ticket,
//             else → show "Insufficient funds."
// ------------------------------------------------------------

// ── 5a. if statement ────────────────────────────────────────
//  Runs the block ONLY when the condition is true.

// let entryAge = Number(prompt("Enter your age:"))
// if(entryAge >= 18){
//     console.log("You are an adult.")
// }


// ── 5b. if-else statement ───────────────────────────────────
//  Runs one block if true, a different block if false.
//  Real-life: a light switch — if flipped on, light turns on; else, it stays off.

let age = 12   // try changing this value to see different results

if(age >= 18){
    console.log("You are an adult.")
}
else{
    console.log("You are not an adult.")
}


// ── 5c. else-if ladder ──────────────────────────────────────
//  Checks multiple conditions one after another — first match wins.
//  Real-life: a grading system — A, B, C, D, E or Fail.

// let marks = 85
// let attendance = 80

// if(marks >= 90 && attendance >= 75){
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
// else if(marks >= 50 && attendance >= 75){
//     console.log("Grade: E")
// }
// else{
//     console.log("Fail")
// }


// ── 5d. switch statement ────────────────────────────────────
//  Matches one variable against a set of fixed values.
//  Cleaner than a long if-else chain when comparing one variable to many values.
//  Real-life: choosing a day name from its number (1 → Monday, 2 → Tuesday …).
//  ⚠  Always add break; so only the matched case runs.

// let day = prompt("Enter a number 1-7 for the day of the week:")

// switch(day){
//     case '1': console.log("Monday");    break
//     case '2': console.log("Tuesday");   break
//     case '3': console.log("Wednesday"); break
//     case '4': console.log("Thursday");  break
//     case '5': console.log("Friday");    break
//     case '6': console.log("Saturday");  break
//     case '7': console.log("Sunday");    break
//     default:  console.log("Invalid input. Please enter a number from 1 to 7.")
// }


// — Quick exercise: prompt-based calculator —
// let calcNum1 = Number(prompt("Enter the first number:"))
// let calcNum2 = Number(prompt("Enter the second number:"))
// let calcSum  = calcNum1 + calcNum2
// console.log(`The sum of ${calcNum1} and ${calcNum2} is: ${calcSum}`)


// ============================================================
//  SECTION 6 — TYPE CASTING
// ============================================================
//  Type casting = converting a value from one data type to another.
//
//  Type Coercion   (implicit) — JavaScript converts automatically
//    Real-life: a vending machine that accepts coins and bills and
//               converts everything to internal credit on its own.
//
//  Type Conversion (explicit) — you convert manually with functions
//    Number("42")     → 42       string to number
//    Number("hello")  → NaN      non-numeric string → Not a Number
//    parseInt("42px") → 42       reads digits until the first non-digit
//    String(42)       → "42"     number to string
//    Boolean(0)       → false    falsy values: 0, "", null, undefined, NaN
// ------------------------------------------------------------

// — Type Coercion examples (implicit) —
let val = "10"

console.log(val + 5)   // "105" — + with a string means concatenation, not addition
console.log(val - 5)   //   5   — - forces "10" to become the number 10, then subtracts
console.log(val * 2)   //  20   — * forces "10" to become the number 10, then multiplies


// — Type Conversion examples (explicit) —
let val1 = Number(prompt("Enter number 1:"))
let val2 = Number(prompt("Enter number 2:"))
let sum  = val1 + val2
console.log(`The sum of ${val1} and ${val2} is: ${sum}`)
