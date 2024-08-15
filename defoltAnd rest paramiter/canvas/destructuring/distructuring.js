// destructuring holo javascript ar expresson ja array thke bostur man k alada kore


// array destructure 
// swap variable 
// object destructure
// nested object destructure
// destructuring function parameters


// array destructure = জাভাস্ক্রিপ্টে অ্যারে ডিস্ট্রাকচারিং হল একটি সিনট্যাক্স যা আপনাকে অ্যারে থেকে মান, বা বস্তুর বৈশিষ্ট্যগুলিকে আলাদা ভেরিয়েবলে আনপ্যাক করতে দেয়। 

// let numbers = [1,2,3,4];
// let [num1,num2,...z ]= numbers; // destructure  // spreat operator ...z
// // console.log(num1);
// console.log(z);

// // swap varibales
// let a=10,b=20;
// [a,b] = [b,a]; // swap destructure
// console.log(a);
// console.log(b);

// object destructure 

// const studentInfo = {
//     id : 123,
//     name : "Rana",
//     gpa : 4.00
// }
// const {id, name} = studentInfo;

// console.log(id);
// console.log(name);
 
// nested object destructure

// const studentInfo = {
//     id : 123,
//     name : "Rana",
//     gpa : 4.00,
//     language : {
//         native : "bangla",
//         beginner : " english"
//     }
// }
// const {name, language} = studentInfo;

// console.log(name);
// console.log(language);


// destructuring function parameters
const studentInfo = ({id, fullName}) =>
{
    console.log(`${id}, ${fullName}`);
}
const student = {
   id : 145,
   fullName : 'Rana ahmed' 
}
studentInfo(student);
 