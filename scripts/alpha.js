// function play(){
//     // console.log('Play Start Now');

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('Button Pressed',playerPressed);


    if(playerPressed === 'Escape'){
        gameover();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet){
        // console.log('You Win!');

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('You Missed and Lost a Life');

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeElementText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeElementText);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0){
            // console.log('END!');
            gameover();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);;
}