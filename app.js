const title=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color="tomato";
}

function handleMouseEnter(){
    console.log("mouse is entered!");
    title.innerText="Mouse is here!";
}

function handleMouseLeave(){
    console.log("mouse is leaved!");
    title.innerText="Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);