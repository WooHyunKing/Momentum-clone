const loginForm=document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input");
const loginButton=document.querySelector(".login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);

    const time = new Date();
    const hour = time.getHours();
    
    if(hour>=5 && hour <=9){
        greeting.innerText=`Good morning, ${username}`;
    }
    else if(hour>=10 && hour<=17){
        greeting.innerText=`It's a good lunch, ${username}`;
    }
    else{
        greeting.innerText=`Good evening, ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greeting
    paintGreetings();
}