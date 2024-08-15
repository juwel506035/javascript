// // callback , higher-oder function

// function square(x)
// {
//     console.log(`square of ${x}: ${x*x}`);
// }
// // square(9);

// // higher-oder function

// function higherOrder(num,callback)
// {
//     callback(num);
// }

// higherOrder(4,square);


//callback and higher


// Synchronous vs Asynchronous
// Callback, higher,-oder function
// promise
// Async await

// Synchronous programm== javascript by default synchronous ata akta task complite na hoya porjnoto onno task a jabe na

const taskOne = (callback) =>
    {
        console.log("Task1");
        callback();
    
    };
    
    // const dataloading = () => // asynchronous 
    // {
    //     console.log("Task2. data loading");
    
    // }
    const taskTwo = (callback) =>
        {
        setTimeout(( ) =>
            {
                console.log("Task2. data loading");
                callback();
            },2000); // asyn
        };
    
    const taskThree = (callback) =>
            {
            console.log("Task3");
            callback();
            
            };
            const taskFour = () =>
                {
                    console.log("Task4");
                     
                };

                taskOne( () =>
            {
                taskTwo(function f2()
            {
                taskThree(function f3()
            {
                taskFour( );
            });
        });

     });

            