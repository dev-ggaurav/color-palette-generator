const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
btn.addEventListener('click',generatePalette);

generatePalette();

function generatePalette() {
    generateColorOne ();
    generateColorTwo ();
    generateColorThree ();
    generateColorFour ();
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function generateColorOne() {
    const colorOne = document.getElementById('color1');
    const hexCodeOne = document.getElementById('hex-code1');
    let hexColor = '#';
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()];
    }

    hexCodeOne.innerText = hexColor;
    colorOne.style.backgroundColor = hexColor;

}

function generateColorTwo() {
    const colorTwo = document.getElementById('color2');
    const hexCodeTwo = document.getElementById('hex-code2');
    let hexColor = '#';
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()];
    }

    hexCodeTwo.innerText = hexColor;
    colorTwo.style.backgroundColor = hexColor;

}


function generateColorThree() {
    const colorThree = document.getElementById('color3');
    const hexCodeThree = document.getElementById('hex-code3');
    let hexColor = '#';
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()];
    }

    hexCodeThree.innerText = hexColor;
    colorThree.style.backgroundColor = hexColor;

}


function generateColorFour() {
    const colorFour = document.getElementById('color4');
    const hexCodeFour = document.getElementById('hex-code4');
    let hexColor = '#';
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getRandomNumber()];
    }

    hexCodeFour.innerText = hexColor;
    colorFour.style.backgroundColor = hexColor;

}
