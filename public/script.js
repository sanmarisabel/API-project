const baseURL = 'https://pokeapi.co/api/v2/pokemon';

let squirtlePokeball = document.querySelector('.squirtlePokeball');
let bulbasaurPokeball = document.querySelector('.bulbasaurPokeball');
let charmanderPokeball = document.querySelector('.charmanderPokeball');
let buttonContainer = document.querySelector(".buttonContainer")

let squirtleContainer = document.querySelector('.squirtleContainer')
let bulbasaurContainer = document.querySelector('.bulbasaurContainer')
let charmanderContainer = document.querySelector('.charmanderContainer')

squirtlePokeball.addEventListener('click', fetchSquirtle);
bulbasaurPokeball.addEventListener('click', fetchBulbasaur);
charmanderPokeball.addEventListener('click', fetchCharmander);

let squirtleImg = document.createElement('img')
let bulbasaurImg = document.createElement('img')
let charmanderImg = document.createElement('img')

let headingContainer = document.querySelector('.headingContainer')

// HEADING 
let heading = document.createElement('p');
    heading.classList.add('headingContainer');
    heading.innerText = "Choose a POKéMON.";
    heading.style = 'font-size: 50px; font-family: pixel; color: black';
    console.log(heading);

    headingContainer.appendChild(heading);

//RESET 
let button = document.createElement('button');
    button.innerText = 'Choose Again';
    button.className = 'reset';
    button.style = 'margin:0; margin-top: 4em';

    buttonContainer.appendChild(button);


// SQUIRTLE

function fetchSquirtle() {
    fetch (`${baseURL}/${7}`)
    .then (function (response){
        return response.json()
    })
    .then (function (json) {
        // console.log(json)
        displaySquirtle(json)
    })
    console.log(squirtleContainer)
    squirtleContainer.removeChild(squirtlePokeball);
}

function displaySquirtle(json) {
    console.log(json.sprites.front_default)

    squirtleImg.src = json.sprites.front_default;
    squirtleImg.classList.add('squirtlePokeball')
    squirtleImg.style.height = '400px';
    squirtleContainer.appendChild(squirtleImg)
}

button.addEventListener('click', () => {
    squirtleContainer.removeChild(squirtleImg);
    squirtleContainer.appendChild(squirtlePokeball);

})

// BULBASAUR

function fetchBulbasaur() {
    fetch (`${baseURL}/${1}`)
    .then (function (response){
        return response.json()
    })
    .then (function (json) {
        // console.log(json)
        displayBulbasaur(json);
    })   
    console.log(bulbasaurContainer);
    bulbasaurContainer.removeChild(bulbasaurPokeball);
}

function displayBulbasaur(json) {
    console.log(json.sprites.front_default)

    bulbasaurImg.src = json.sprites.front_default;
    bulbasaurImg.classList.add('bulbasaurPokeball')
    bulbasaurImg.style.height = '400px';
    bulbasaurContainer.appendChild(bulbasaurImg)
}
button.addEventListener('click', () => {
    bulbasaurContainer.removeChild(bulbasaurImg);
    bulbasaurContainer.appendChild(bulbasaurPokeball);

})

// CHARMANDER

function fetchCharmander() {
    fetch (`${baseURL}/${4}`)
    .then (function (response){
        return response.json()
    })
    .then (function (json) {
        // console.log(json)
        displayCharmander(json)
    })
    console.log(charmanderContainer);
    charmanderContainer.removeChild(charmanderPokeball);
}

function displayCharmander(json) {
    console.log(json.sprites.front_default)

    charmanderImg.src = json.sprites.front_default;
    charmanderImg.classList.add('charmanderPokeball')
    charmanderImg.style.height = '400px';
    charmanderContainer.appendChild(charmanderImg)
}

button.addEventListener('click', () => {
    charmanderContainer.removeChild(charmanderImg);
    charmanderContainer.appendChild(charmanderPokeball);

})