


let countEl = document.getElementById("count");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");


countElementText = Number(countEl.innerText);


inc.addEventListener('click', function(){
    countElementText ++;
    countEl.innerText = countElementText;
})

dec.addEventListener('click', function(){
    countElementText --;
    countEl.innerText = countElementText;
})