// defailt and Rest paramitter
"use strict"
//  function messege(text)
//  {
//     console.log(`${text}`);

//  }
//   messege("I love programm");

//   user ar kase defuilt value deyar jnno 

// function messege(text = "Hello this is default parameter")
//  {
//     console.log(`${text}`);

//  }
//   messege( );
//   messege("I love programm");

// Rest parameter

function sum(x,y,...z) // Rest pa= ...z
{
    
    console.log(`x=${x}, y=${y}, z=${z}` );
    
     
}

 console.log(sum(10,20,30));
 
