window.onload = function(){
let first = document.getElementsByClassName("first")[0];
let second = document.getElementsByClassName("second")[0];
let opt = document.getElementsByClassName("opt")[0];
let result = document.getElementsByClassName("result")[0];
let button = document.getElementsByClassName("btn")[0];
button.onclick = oprations;
function oprations(){
    if(opt.value === "+"){
    result.value = Number(first.value) + Number(second.value)};
    if (opt.value === "-"){
    result.value = Number(first.value) - Number(second.value)};
    if (opt.value === "*"){
    result.value = Number(first.value) * Number(second.value)};
    if (opt.value === "/"){
    result.value = Number(first.value) / Number(second.value)};
    if (opt.value === "%"){
    result.value = Number(first.value) % Number(second.value)};
}
}