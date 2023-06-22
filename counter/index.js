var decrease =document.getElementById('decrease');
var reset =document.getElementById('reset');
var increase =document.getElementById('increase');
var display =document.getElementById('display');



var count =0;

increase.addEventListener('click',()=>{
   count++;
   if(count>0){
    display.style.color='green';
   }
 display.innerText=count;  
})

decrease.addEventListener('click',()=>{
   count--;
   if(count<0){
    display.style.color='red';
   }
 display.innerText=count;  
})


reset.addEventListener('click',()=>{
count=0;
if(count==0){
 display.style.color='black';
}
display.innerText=count;  
})
