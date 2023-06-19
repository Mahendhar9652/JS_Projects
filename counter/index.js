var decrease =document.getElementById('decrease');
var reset =document.getElementById('reset');
var increase =document.getElementById('increase');
var display =document.getElementById('display');



var count =0;

increase.addEventListener('click',()=>{
display.innerText=count++;
})

decrease.addEventListener('click',()=>{
   if(count>0){
    display.innerText=count--;
   }
   
})


reset.addEventListener('click',()=>{
display.innerText=0;
})
