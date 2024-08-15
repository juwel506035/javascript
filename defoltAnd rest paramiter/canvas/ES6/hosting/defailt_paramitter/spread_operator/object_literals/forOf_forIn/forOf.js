// for ... of and for ... in


// for of ar sahaje iteret kora jai

// const names = ["r1","r2",r3];
// for(let name of names)
// {
//     console.log(name);
// }

// for in khub importance ata objet niye kaj kore and object k eteret kore

let students =
{
    name : "rana ahmed",
    age : 21,
    id : 111
}
for(let x in students)
{
    // console.log(students[x]);
    // backlit use kore 
    console.log(`${x} : ${students[x]}`);
}