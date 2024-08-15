// js BOM
// POPUP Boxes - alert, confirm,prompt

// alert("error here");

// confirm box == user ar kas thke confirm neyar jnno use kora hy
// confirm("Are you sure?");

// function deleteSomething()
// {
//     let value = confirm("Do you want to delete");
//     if(value)
//     {
//         console.log("deleted");
//     }
//     else
//     {
//         console.log("Not deleted");
//     }
// }

// deleteSomething();


// prompt
function welcomemessege()
{
    var h1= document.createElement("h1");
    let text;
    var name=prompt("Enter your name");
    if(name==null || name=='')
    {
        text="No name found";
    }
    else
    {
        text=name;
    }
    var textNode= document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomemessege();
