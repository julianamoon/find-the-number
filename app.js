const getNumberBtn = document.querySelector('.number-btn');
const answerBtn = document.querySelector('.answer-btn');
let answerInput = document.getElementById('answer-input');
const numberWall = document.getElementById('number-wall');

let input1 = document.getElementById('guess-input'); 
let input2 = document.getElementById('guess-input-2'); 
const sendBtn = document.querySelector('.send-btn');

let guessMax = document.querySelectorAll('.span-guess-max');
let guessMin = document.querySelectorAll('.span-guess-min');

let biggerLabel = document.getElementById('boolean1')
let lesserLabel = document.getElementById('boolean2')
let betweenLabel = document.getElementById('boolean3')

let gameNumber = document.getElementById('number');
let firstGuess = 0;
let secondGuess = 0;
let randNumber = 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

getNumberBtn.addEventListener('click', (e) => {
    numberWall.classList.add('number-wall');
    randNumber = getRandomNumber();
    return alert('You generated a number! Good luck finding out which one is it.');
})

sendBtn.addEventListener('click', (e) => {
    if(input1.value === '' || input2.value === '') return;
    
    firstGuess = input1.value;
    secondGuess = input2.value;
    
    guessMin.forEach(el => el.innerHTML = firstGuess)
    guessMax.forEach(el => el.innerHTML = secondGuess)
    
    getGuesses(firstGuess, secondGuess);
})

answerBtn.addEventListener('click', (e) => {
    if (!answerInput.value) { return alert('Did you even try? Type a number first!') }
    
    if (answerInput.value === gameNumber.innerText) {
        numberWall.classList.remove('number-wall')
        return alert('You Win!')
    }
    
    if (answerInput !== gameNumber.innerText) { alert('Oops! Try again!') }
})

function getGuesses(firstGuess, secondGuess) {
    IsRandomBigger(Number(secondGuess));
    IsRandomLesser(Number(firstGuess));
    IsRandomInBetween(Number(firstGuess), Number(secondGuess));
}

function IsRandomBigger(secondGuess) {
    if (randNumber === secondGuess) return biggerLabel.innerHTML = '...';
    if (randNumber > secondGuess) return biggerLabel.innerText = 'Yes';
    return biggerLabel.innerText = 'No';
}

function IsRandomLesser(firstGuess) {
    if (randNumber === firstGuess) return lesserLabel.innerHTML = '...';
    if (randNumber < firstGuess) return lesserLabel.innerText = 'Yes';
    return lesserLabel.innerText = 'No';
}


function IsRandomInBetween(firstGuess, secondGuess) {
    if (randNumber === firstGuess || randNumber === secondGuess) return betweenLabel.innerHTML = '...';

    if (firstGuess < randNumber && secondGuess > randNumber) {
        return betweenLabel.innerText = 'Yes'
    }

    return betweenLabel.innerText = 'No'
}
