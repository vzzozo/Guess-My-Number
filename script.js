'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const message = document.querySelector('.message')
const currentScore = document.querySelector('.score')

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    //no input
    if (!guess) {
        message.textContent = '❌ No number!'
    }
    //win
    else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    //too high
    else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = 'Too high! 📈'
            score -= 1
            currentScore.textContent = score;
        }
        else {
            message.textContent = '💥 You lost the game!'
            currentScore.textContent = 0;
        }
    }
    //too low
    else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = ' Too low! 📉'
            score -= 1
            currentScore.textContent = score;
        }
        else {
            message.textContent = '💥 You lost the game!'
            currentScore.textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click', () => {
    currentScore.textContent = 20;
    score = 20;
    message.textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})