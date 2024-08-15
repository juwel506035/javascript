// class
// constructor
// object
// set 
// get

// // export and import
// import { text,setText } from "./myModule.js";
// console.log(text); // onno js file ar text access kora 
//  setText("goodbye form es6"); // text change korte
//  console.log(text);

// class making 

//class making 
class Student {

    constructor(id,name){ // constructor making 
        this.id = id;
        this.name = name;
    }
    
    set studentName(name)
    {
        this.name = name;
    }

    get studentInfo()
    {
        return this.id + " " + this.name;
    }
}

// object making 
let s1 = new Student(123,'rana');
console.log(s1.studentInfo);
// console.log(s1);

// s1.studentName='jim';
// console.log(s1.name);
