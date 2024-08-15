// js bom
// js timing events methods
// settimeout(), setinterval()= repeat hbe

// anuminal function
// setTimeout(()=>{
//     console.log("hi");
// }, 4000);

// setTimeout(display,2000);
// function display()
// {
//     console.log("display function");
// }


// settime start
const btn = document.querySelector(".btn");
const messege = document.querySelector(".messege");

// btn.addEventListener("click",saveUser)
// function saveUser()
// {
//     messege.textContent= "user registration successful";
//     setTimeout(()=>{
//         messege.textContent="";
//     }, 200
       
//     );
// }
// settime end

//setinterval
btn.addEventListener('click', displayCount);
function displayCount()
{
    let count = 0;
    messege.textContent=1;

    setInterval(()=>{
        count++;
        messege.textContent = count;

    }, 1000);

}



