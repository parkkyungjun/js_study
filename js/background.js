const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg =  document.createElement("img");

//const body = document.querySelector("body");

//bgimg.src = `img/${chosenImage}`;

//document.body.appendChild(bgimg);
document.body.style.background = `url(img/${chosenImage}) no-repeat 0 0`;
