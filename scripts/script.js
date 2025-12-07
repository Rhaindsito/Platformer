import React from "react";

const gameWindow = document.getElementById("main");

function loadMap(map){
    const block = createElement('div');
    block.classList.add("block");
    block.appendChild(gameWindow);
}

document.addEventListener('DOMContentLoaded', loadMap(maps[0]));