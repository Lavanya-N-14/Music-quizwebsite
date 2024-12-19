const startBtn = document.querySelector('.start-btn');
const rulesSection = document.querySelector('.rules');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz1');


// Start button click event
startBtn.onclick = () => {
    rulesSection.classList.add('active');
    main.classList.add('active');
}

// Exit button click event
exitBtn.onclick = () => {
    rulesSection.classList.remove('active');
    main.classList.remove('active');
}

// Continue button click event
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    rulesSection.classList.remove('active');
    main.classList.remove('active');
}