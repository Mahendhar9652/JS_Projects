var bar =document.getElementById('bar')
var circle =document.getElementById('circle')
var sideNavbar =document.getElementById('side-navbar')
var header =document.getElementById('header')


bar.addEventListener('click',()=>{
  sideNavbar.style.display='inline-block';
  header.style.display='none'  
})
circle.addEventListener('click',()=>{
  sideNavbar.style.display='none';
  header.style.display='flex'  
})