let order = [];
let clickedOrder = [];
let score = 0;
var somGenis=document.getElementById('somGenis');
var somGenis2=document.getElementById('somGenis2');

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue'); 
const red = document.querySelector('.red'); 
const green = document.querySelector('.green'); 
const yellow = document.querySelector('.yellow'); 

//criando ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); somGenis.play();
    order[order.length] = colorOrder; 
    clickedOrder = []

    for(let i in order) { 
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); 
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 700; somGenis.play();
    setTimeout(() => { somGenis.play();
        element.classList.add('selected'); somGenis.play();
    }, number - 250); 
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões clicados são na mesma ordem no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver(); 
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        netxLevel();
    }
}

//função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },60);

}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) { 
        return green; 
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para proximo nivel do jogo
let netxLevel = () => {
    score++; 
    shuffleOrder();
}

//função para game over
let gameOver = () => { 
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em Ok para joga novamente`); somGenis2.play();
    order = [];
    clickedOrder = [];

    playGame();  
}

let playGame = () => {
    alert('Bem vindo ao Gênesis iniciando novo jogo!');
    score = 0; 

    netxLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();