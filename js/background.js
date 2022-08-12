const images=[
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

//appendChild는 맨 밑에, prepend는 맨 위에 추가
//document.body.appendChild(bgImage);
document.body.prepend(bgImage);