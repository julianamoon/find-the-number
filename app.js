const getNumberBtn = document.querySelector('.number-btn');
const answerBtn = document.querySelector('.answer-btn');
let answerInput = document.getElementById('answer-input');
const numberWall = document.getElementById('number-wall');

let input1 = document.getElementById('guess-input'); 
let input2 = document.getElementById('guess-input-2'); 
const sendBtn = document.querySelector('.send-btn');

let guessMax = document.querySelectorAll('.span-guess-max');
let guessMin = document.querySelectorAll('.span-guess-min');

let boolean1 = document.getElementById('boolean1')
let boolean2 = document.getElementById('boolean2')
let boolean3 = document.getElementById('boolean3')

let gameNumber = document.getElementById('number');
let firstGuess = 0;
let secondGuess = 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

getNumberBtn.addEventListener('click', (e) => {
    numberWall.classList.add('number-wall');
    gameNumber.innerText = getRandomNumber();
    return alert('You generated a number! Good luck finding out which one is it.');
})

sendBtn.addEventListener('click', (e) => {
    if(input1.value === '') return;
    if(input2.value === '') return;
    
    firstGuess = input1.value;
    secondGuess = input2.value;
    
    guessMin.forEach(el => el.innerHTML = firstGuess)
    guessMax.forEach(el => el.innerHTML = secondGuess)
    
    getGuesses(firstGuess, secondGuess);
})

answerBtn.addEventListener('click', (e) => {
    if (!answerInput.value) { return alert('Did you even try?') }
    
    if (answerInput.value === gameNumber.innerText) {
        numberWall.classList.remove('number-wall')
        return alert('You Win!')
    }
    
    if (answerInput !== gameNumber.innerText) { alert('Oops! Try again!') }
})

function getGuesses(firstGuess, secondGuess) {
    let onlyNumber = gameNumber.innerText;
    
    getBoolean1(secondGuess, onlyNumber);
    getBoolean2(firstGuess, onlyNumber);
    getBoolean3(firstGuess, secondGuess, onlyNumber);
}

function getBoolean1(secondGuess, onlyNumber) {
    if (onlyNumber === secondGuess) return boolean1.innerHTML = '...';
    if (onlyNumber > secondGuess) return boolean1.innerText = 'Yes';
    if (onlyNumber < secondGuess) return boolean1.innerText = 'No';
}

function getBoolean2(firstGuess, onlyNumber) {
    if (onlyNumber === firstGuess) return boolean2.innerHTML = '...';

    if (onlyNumber < firstGuess) return boolean2.innerText = 'Yes';
    if (onlyNumber > firstGuess) return boolean2.innerText = 'No';
}


function getBoolean3(firstGuess, secondGuess, onlyNumber) {
    let fG = Number(firstGuess);
    let sG = Number(secondGuess);
    let oN = Number(onlyNumber);

    if (oN === fG || oN === sG) return boolean3.innerHTML = '...';

    if (fG < oN) {
        if (sG > oN) {
            return boolean3.innerText = 'Yes'
        }
        if (sG < oN) {
            return boolean3.innerText = 'No' 
        }
    }

    return boolean3.innerText = 'No'
}
