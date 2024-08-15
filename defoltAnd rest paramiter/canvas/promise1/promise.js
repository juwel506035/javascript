// How to creat a promise 
// How to use a promise 
// how to run multiple promise - all()
// race()
// promise chaining

console.log("welcome");

// creat a promise = pending , resolve= then() , reject= catch()   part threes
const promise1 = new Promise((resolve, reject)=>{

        let completedPromise = false;
        if(completedPromise)
        {
            resolve("complete promise1");
        }
        else
        {
            reject("not complete promise1");
        }
});

// promise use kora

// console.log(promise1);
promise1.then(res=>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});
console.log("end");