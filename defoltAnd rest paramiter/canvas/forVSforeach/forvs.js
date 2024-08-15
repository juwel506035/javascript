// for vs foreach

// // for

// var numbers = [1,2,3,4];
// for(var i=0; i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }


// foreach

// var numbers = [1,2,3,4,5];
// numbers.forEach(myfunc)   // foreach ar vitor r akta function diye call korte hbe
// function myfunc(x)
// {
//     console.log(x);
// }

// number gula squar kora jnno 

var numbers = [1,2,3,4,5];
var squar = [];
numbers.forEach(myfunc)   // foreach ar vitor r akta function diye call korte hbe
function myfunc(x)
{
    squar.push(x*x);
}

console.log(squar);

