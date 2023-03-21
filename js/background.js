const body = document.querySelector("body");
const background = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const randomIndex = Math.floor(Math.random()*background.length);
body.style.backgroundImage = `url(./img/background/${background[randomIndex]})`;
body.style.backgroundSize = "cover";