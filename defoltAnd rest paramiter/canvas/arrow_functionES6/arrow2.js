// akta array niye ar vitor object making korte hbe

var students = [
    {
        id : 111,
        name : 'Rana ahmed',
        gpa : 2.50
    },

    {
        id : 122,
        name : 'jim ahmed',
        gpa : 5.00
    },

    {
        id : 133,
        name : 'juwel ahmed',
        gpa : 1.60
    },

    {
        id : 144,
        name : 'sumon ahmed',
        gpa : 4.00
    }
]

// traditional function

function studentNames1()
{
   return students.filter(function(x)
{
   return x.gpa > 3
}).map(function(y) // sudhu name print korar jnno 
{
    return y.name;
});

}

// arrow function use kore 
const studentNames2 = () =>
{
   return students.filter((x) => x.gpa >1).map((y)  => y.name);
}

console.log(studentNames2());

console.log(studentNames1());
 

