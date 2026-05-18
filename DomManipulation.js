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


// let heading = document.getElementById('header');
// let para = document.getElementById('para');



//  properties of Dom elements
//  1. innerText
//  2. innerHTML
//  3. textContent
//  4. value
//  5. style
//  6. classList


// console.log(heading.innerText)
// console.log(para.innerText)
// console.log(heading.textContent)
// console.log(para.textContent)

// heading.addEventListener('click', function(){
//     heading.textContent = "Heading has been changed"
// })



// let box = document.querySelector('.box');

// console.log(box.innerHTML)


// let name = document.querySelector('#name')

// name.value = "Ashpreet"


let header = document.getElementById('header');
let para = document.querySelector('.para')

header.style.color = "red"
header.style.border = "2px solid black"
header.style.backgroundColor = "yellow"

console.log(header.style)


para.addEventListener('click', function(){
    para.classList.remove('para')
    para.classList.add('para2')
})

