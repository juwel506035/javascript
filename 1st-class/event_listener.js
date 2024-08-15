document.querySelector("button").addEventListener("click",myfunction); // click korle jno change hy

function myfunction()
{
    alert("hello");
}

 var myvar=document.querySelector("h1");

 myvar.addEventListener("mouseover",function() {
    
    myvar.classList.add("my-style");  
 });

 myvar.addEventListener("mouseout",function() {
    
    myvar.classList.remove("my-style");  
 });
 
 