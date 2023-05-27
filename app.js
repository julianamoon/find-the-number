const getNumberBtn = document.querySelector('.number-btn');
const answerBtn = document.querySelector('.answer-btn');
let answerInput = document.getElementById('answer-input');
const numberWall = document.querySelector('.number-wall');

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
    numberWall.classList.add('number-wall')
    gameNumber.innerText = getRandomNumber();
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
    if (onlyNumber === firstGuess || onlyNumber === secondGuess) return boolean3.innerHTML = '...';

    if (firstGuess < onlyNumber) {
        if (secondGuess < onlyNumber) {
            return boolean3.innerText = 'No' 
        }
        if (secondGuess > onlyNumber) {
            return boolean3.innerText = 'Yes'
        }

    return boolean3.innerText = 'No'
    }
}
