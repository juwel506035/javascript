var link=document.getElementsByTagName("a")[0]; // find kora
link.innerHTML="study with anis";
link.style.textDecoration="none";
link.style.color="green";
link.href="https://www.w3schools.com/js/js_htmldom_html.asp";
// find end

// creat a new element

var heading3=document.createElement("h1"); // element make
var text= document.createTextNode("This is heading 3"); // element text make
heading3.appendChild(text);// heading 3 ar sthe text add

var mydiv= document.querySelector("#my_dive");
mydiv.appendChild(heading3);

// remov korar jnno

var heading2=document.getElementsByTagName("h1")[1];
mydiv.removeChild(heading2);

var heading0=document.createElement("h1"); // element make
var text0= document.createTextNode("This is heading 0"); // element text make
heading0.appendChild(text0);// heading 3 ar sthe text add

var heading1=document.getElementsByTagName("h1")[0];


mydiv.insertBefore(heading0, heading1);
