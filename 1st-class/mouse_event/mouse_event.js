// mouseEvent- <html>,<head>,<meta>,<title>,<br>,<style>,<script>,<ifram>,<param>,<base>,<bdo>
// onclick
// ondblclick
// onmousedown
// onmouseenter
// onmouseleave
// onmousemove
// onmouseover
console.clear();
const div=document.querySelector("div");
 
div.addEventListener("click",function(){
    console.log("click");
});

div.addEventListener("dblclick",function(){
    console.log("dblcick is occured");
});