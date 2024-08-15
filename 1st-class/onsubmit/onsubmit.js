 // select value
 const form=document.querySelector('form');
 const name=form.querySelector('div #name');
 const email=form.querySelector('div #email');
 const password=form.querySelector('div #password');
 

 form.addEventListener("submit", formHandler);

 function formHandler(e)
 {
    e.preventDefault();
    // console.log("submit");
    // console.log(name.value);

    // backend jvabe kaj data pahtano hy
    const userInfo = 
    {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    console.log(userInfo);

    // submit korar por value empty kore deya 

    name.value="";
    email.value="";
    password.value="";
 }