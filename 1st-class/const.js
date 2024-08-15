// var name = "rana";
// var age= 21;
// var cgpa = 3.86;
// var lang=["bangla", "english", "hindi"];
// // console.log(age);

// making constructor
function Student(name,age,cgpa,lang)
{
this.name=name;
this.age=age;
this.cgpa=cgpa;
this.lang=lang;
// function use kore 
this.display=function()
{
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
}
}
// sortcut object 
var student1=new Student("rana",21,4, ["bangla", "english", "hindi"] 
);
var student2=new Student("jim",22,5, ["bangla", "english", "hindi"] 
);
var student3=new Student("juwel",23,3, ["bangla", "english", "hindi"] 
);
 
student1.display();


// obj making details
// var student1=
// {
//   name:"Rana",
//   age:21,
//   cgpa:3.86,
//   lang: ["bangla", "english", "hindi"] 
// }

// var student2=
// {
//   name:"jim",
//   age:22,
//   cgpa:3,
//   lang: ["bangla", "english", "hindi","c"] 
// }

// var student3=
// {
//   name:"juwel",
//   age:23,
//   cgpa:3.8,
//   lang: ["bangla", "english", "hindi","java"] 
// }
