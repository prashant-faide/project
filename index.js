// 2. Javascript consloe api
// console.log("Helo ");
// // document.write("This is doucment Write")
// console.warn("This is a warning");
// console.error("This is an error");
// 3. Javascript vairables
// Containers to store data values are called variables
var number1=55;
var number2=56;
// console.log(number1 + number2);
//4 Data Types in java script
var str1= "This is a String";
//objects
var marks={
    subham : 55,
    harry:56,
}
// var a= true;
// var b= false;
// console.log(a,b);
// var und = undefined;
var und;
// console.log(und);
var n = null;
// console.log(n);
/*
There are two main types of data type in javascript
1 Primitive Data Types: undefined,null,string,number,boolean,symbol'
2.Reference Data types: Arrays and Objects
*/
var arr=[1,2,"bablu",4,5]
//Functions in javaScript
function avg(a,b){
        return (a+b)/2;

}
c1 =avg(6,12);
c2= avg(44,55);
// console.log(c1,c2);
// var CustomerName= prompt("Please Enter your Name","<name goes here>");
// if (customerName!= null) {

//     document.getElementById("welcome").innerHTML =

//     "Hello " + customerName + "! How are you today?";

// }
//Foreach loop
// var arr=[1,2,3,4,5,6];
// arr.forEach(function(element){
//     // console.log(element);
// })
// let Myarr=["yo","yos",22,true,null]
// console.log(Myarr.length);
// console.log(Myarr.length);
let LString="Itachi is Uncrowned";
// console.log(LString.length);
// console.log(LString.indexOf("is"));
// console.log(LString.slice(1,4));
let myDate=new Date;
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

//DOM mainpulation technique
let elem= document.getElementById('click');
// console.log(elem);
let elemClass= document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background="Yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerText);
// console.log(elem.innerHTML);
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);
let tn = document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is a created Element";
tn[0].appendChild(createdElement);
//Query Seelctor
sel =document.querySelector('.container');
// console.log(sel);
sel1=document.querySelectorAll('.container');
// console.log(sel1);
// function clicked(){
//     console.log("The button was clicked")
// }
// // events in javascript 
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
//     console.log("click hua");
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on contaoner");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container");
// })
// Arrows  Functions
function sum(a,b){
    return a+b;
}
sum =(a,b)=>{
    return a+b;
}
// SetTimeout and Setinterval
logKaro =()=>{
    console.log("Log");
}
// setTimeout(logKaro,2000);
setInterval(logKaro,2000);


