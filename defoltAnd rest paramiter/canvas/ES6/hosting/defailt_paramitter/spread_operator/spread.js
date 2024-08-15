// spread operator

// normarl way
// function addNumber(x,y,z)
// {
//     return x+ y+z;
// }
// let numbers= [1,2,3]; // array
// console.log(addNumber(numbers[0],numbers[1],numbers[2]));

// spread operator use kore
// function addNumber(x,y,z)
// {
//     return x+ y+z;
// }
//  let number1 = [2,3,4];
//  console.log(addNumber(...numbers));
//  // new array number add kora 

//  let numbe1= [5,6,...numbers] // ata maje 1st and sese use kora jabe
//  console.log(numbe1);

// 2 array add kora 
//  let number2 = [5,7];
// //  let nembers= number1.concat(number2);
// // spreat use kore
// let numbers= [...number1, ...number2];
//  console.log(numbers);

 // object making kore add kora 


 let p1 = 
 {
    name: "Rana ahmed jim",
    age : 21
 }

 let p2 =
 {
    nationality: 'Bangladesh',
    occupation : 'student'
 }

 let p =
 {
    ...p1, ...p2
 }
 console.log(p);