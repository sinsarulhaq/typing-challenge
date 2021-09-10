window.addEventListener('load', init)
const words = [
    'amateur',
    'religion',
    'tastes',
    'hypochondriac',
    'henpeck',
    'indefatigable',
    'institutions',
    'introvert',
    'immoral',
    'impregnable',
    'insolvent',
    'lunatic',
    'societye',
    'expense',
    'narcissist',
    'who',
    'philogynist',
    'mankindt',
    'polyglot',
    'recluse',
    'somnambulist',
    'person',
    'scolding'
]


let time = 10
let score = 0
let isPlaying

const wordInput = document.getElementById('word-input')
const currentWord = document.getElementById('current-word')
const scoreDisplay = document.getElementById('score')
const timeDisplay = document.getElementById('time')
const message = document.getElementById('message')
function init() {
    showWords(words)
    wordInput.addEventListener('input', satrtMatch)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}
function satrtMatch() {
    if (matchWords()) {
        isPlaying = true
        time = 11
        showWords(words)
        wordInput.value = ""
        score++
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0
    } else {
        scoreDisplay.innerHTML = score
    }
}
function matchWords() {
    if (wordInput.value == currentWord.innerHTML) {
        message.style.color = "green"
        message.innerHTML = "Correct !"
        return true

    } else {
        message.innerHTML = ''
        return false
    }
}

function showWords() {
    const rand = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[rand]
}

function countdown() {
    if (time > 0) {
        time--
    } else if (time == 0) {
        isPlaying = false
    }

    timeDisplay.innerHTML = time
}

function checkStatus() {
    if (isPlaying && time == 0) {
        message.style.color = "red"
        message.innerHTML = "Game Over !!"
        score = -1;
    }
}