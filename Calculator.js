
let inputbox = document.getElementById("inputbox");
let equals = document.getElementById("equals");


let opArr = ['+', '-', '*', '/'];

function setVal(n){
    inputbox.value += n
}


function setOp(o){
    let lastChar = inputbox.value.slice(-1);
    console.log(lastChar);
    if(opArr.includes(lastChar)){
      inputbox.value =   inputbox.value.slice(0,-1);   // this will remove last character from the string
        inputbox.value += o;
    }
    else{
        inputbox.value += o;
    }
}


function removeLast(){
    inputbox.value = inputbox.value.slice(0,-1);
}


equals.addEventListener('click', function(){
    let result = eval(inputbox.value);
    console.log(result);
    inputbox.value = result;
})


function clr(){
    inputbox.value = "";
}