// keyboard Event Objects
// keydown- pressing a key,can repeat 
// keypress (may not supported by some browser)
// keyup
// some propertices - key , keycode,code shiftkey,ctlkey,repeat

const textarea=document.querySelector("textarea");

// textarea.addEventListener("keydown",function(){
//     console.log("keydown");
// });

// textarea.addEventListener("keypress",function(){
//     console.log("keypress");
// });

// textarea.addEventListener("keyup",function(){
//     console.log("keyup");
// });

// event dekhar jnno 

textarea.addEventListener("keyup",function(e){
    console.log("e.shitkey");
});