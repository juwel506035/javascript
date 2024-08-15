// creat clock
const btn = document.querySelector(".btn");
const messege = document.querySelector(".messege");

btn.addEventListener("click",startClock);
function startClock()

{
    let date = new Date();
    let hours= date.getHours();
    let minutes= date. getMinutes();
    let second= date.getSeconds();

    minutes = formatTime(minutes);
    second = formatTime(second);

    let time = hours + ":" + minutes + ":" + second;


 
    messege.textContent= time;
    setInterval(startClock,1000);
}

function formatTime(value){
    if(value<10)
    {
        value= "0" + value;
    }
    return value;

}
