// load, unload, scroll,resize,toggle

// windos global object


window.addEventListener("load",function()
{
    console.log("load");
});

window.addEventListener("unload",function()
{
    console.log("unload");
});

window.addEventListener("scroll",function()
{
    console.log("scroll");
});

const details= document.querySelector("details");

details.addEventListener("toggle",function(){
    console.log("toggle");
})