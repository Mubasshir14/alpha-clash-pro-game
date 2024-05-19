// function play(){
//     // console.log('Play Start Now');

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}