const h1=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color="blue"; //style은 대부분 CSS에서 처리
}

function handleMouseEnter(){
    console.log("mouse is entered!");
    h1.innerText="Mouse is here!";
}

function handleMouseLeave(){
    console.log("mouse is leaved!");
    h1.innerText="Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato"
}

function handleWindowCopy(){
    alert("copied!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!");
}

function handleWindowOnline(){
    alert("WIFI is connected!");
}

h1.addEventListener("click",handleTitleClick);
//h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);