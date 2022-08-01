const loginForm=document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input");
const loginButton=document.querySelector(".login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event){
    // const username=loginInput.value;
    // console.log(username);
    event.preventDefault();
    console.log(info);
}

function onLinkClick(event){
    event.preventDefault();
    
    console.log(event);
    alert("clicked");
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",onLinkClick);