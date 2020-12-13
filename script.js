'use strict';

const button = document.querySelector('#change');
let color = document.querySelector('#color'),
    red = 0,
    green = 0,
    blue = 0,
    finalColor = 0;

function generateColor(){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    finalColor = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
}

function changeColor(){
    generateColor();
    color.innerHTML = finalColor;
    document.body.style.background = finalColor;
}

button.addEventListener('click', changeColor);