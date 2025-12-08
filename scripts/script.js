const gameWindow = document.getElementById("main");

function loadBlock(block){
    for (let j = 0; j < ((block.repeat) ? block.repeat : 1); j++){
        const blockElement = document.createElement('div');
        blockElement.classList.add("block");
        gameWindow.appendChild(blockElement);

        let repeatX = (block.repeatDirection == "horizontal-right") ? j : (block.repeatDirection == "horizontal-left") ? -j : 0;
        let repeatY = (block.repeatDirection == "vertical-down") ? j : (block.repeatDirection == "vertical-up") ? -j : 0;
        if (!block.repeatDirection){repeatX = j;}

        blockElement.style.gridColumn = `${(block.position.x + 1) + repeatX} / ${(block.position.x + 2) + repeatX}`;
        blockElement.style.gridRow = `${(block.position.y + 1) + repeatY} / ${(block.position.y + 2) + repeatY}`; 
    }
}

function loadMap(map){
    const blocks = map.blocks;
    console.log(blocks[0]);
    for (let i = 0; i < blocks.length; i++){
        loadBlock(blocks[i]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadMap(maps[0]);
});