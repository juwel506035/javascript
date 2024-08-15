// Synchronous vs Asynchronous
// Callback, higher,-oder function
// promise
// Async await

// Synchronous programm== javascript by default synchronous ata akta task complite na hoya porjnoto onno task a jabe na

const taskOne = () =>
{
    console.log("Task1");

};

const dataloading = () => // asynchronous 
{
    console.log("Task2. data loading");

}
const taskTwo = () =>
    {
    setTimeout(dataloading,2000); // asyn
    };

    const taskThree = () =>
        {
            console.log("Task3");
        
        };
        const taskFour = () =>
            {
                console.log("Task4");
            
            };

            taskOne();
            taskTwo();
            taskThree();
            taskFour();
            