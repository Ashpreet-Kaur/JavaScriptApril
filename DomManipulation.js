//  DOM - Document Object Model


// console.log(document);


// console.log(document.head)
// console.log(document.body)
// console.log(document.title)
// console.log(document.URL)


//  Accessing Elements in DOM 


// 1. getElementsByClassName
// 2. getElementsByTagName
// 3. getElementById
// 4. querySelector
// 5. querySelectorAll


// console.log(document.getElementsByTagName('h2')[0])
// console.log(document.getElementsByClassName('para'))

// console.log(document.getElementById('paragraph'))

// console.log(document.querySelectorAll('#paragraph'))


let heading = document.getElementById('header');
let para = document.getElementById('para');



//  properties of Dom elements
//  1. innerText
//  2. innerHTML
//  3. textContent


console.log(heading.innerText)
console.log(para.innerText)
console.log(heading.textContent)
console.log(para.textContent)

heading.addEventListener('click', function(){
    heading.textContent = "Heading has been changed"
})