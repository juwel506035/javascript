// array,.find() method= array theke 1st value dei akta condition ar opr kaj kore
// array.findlndex() method= value return kore na index return kore 

// array.find()

let numbers = [7,50,13,88];
// let firstEventNumber = numbers.find(x => x%2==0);
// console.log(firstEventNumber);

// function use kore 

const evenNumber = (value, index,array) =>{

    if(value%2==0)
        return value;
}
let firstEventNumber = numbers.find(evenNumber);
let firstEventNumberindex = numbers.findIndex(evenNumber);
console.log(firstEventNumber);
console.log(firstEventNumberindex);