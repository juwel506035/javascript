// BOM(browser object model)= browser ar sthe comm
// Window object
// Location object= current page ar url ba address khuje ber kora jai


console.clear();
// // console.log(window)

// // href
// console.log(location.href);

// // protocol
// console.log(location.protocol);

// // host name
// console.log(location.hostname);

// // port

// console.log(location.port);

// // pathname
//  console.log(location.pathname)

// browser show korar jnno
var locationDiv=document.querySelector(".location-div");
 
var p1=locationDiv.children[0];
 p1.textContent=location.href;

 var p2=locationDiv.children[1];
 p2.textContent=location.hostname;

 var p3=locationDiv.children[2];
 p3.textContent=location.protocol;

 var p4=locationDiv.children[3];
 p4.textContent=location.port;

 // onno page a jayar jnno
 const button=document.getElementById("visit");
 button.addEventListener("click", function(){
    location.assign("https://www.youtube.com/watch?v=ytOhuX7C69Y&list=PLgH5QX0i9K3p06YY1fyReA2UK8mh_zsiY&index=238")
 })