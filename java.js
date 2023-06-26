const startBtn = document.querySelector('.Start')

const screens = document.querySelectorAll('.screen')
const gameBoard = document.querySelector('.Gameboard');


let turn = true
const Gameboard = {
    

     render() {
            gameBoard.innerHTML = ''
            turn = true
    
        for (let i = 0; i < 9; i++){
        const screen = document.createElement('div');
        screen.classList.add(`screen`);
        screen.classList.add(`${i}`);

        gameBoard.appendChild(screen)

    };
    
    
    const screens = document.querySelectorAll('.screen'); // Move this line inside the render method
    screens.forEach((screen) => screen.addEventListener('click', Gameboard.addPointer, {once: true}));
},
    addPointer(e) {
      if(e.target.firstChild){return console.log(turn)}
        const pointer = document.createElement('img')
        if(turn == true){
            pointer.src = 'pointer.svg'
            turn = false
    }
        else{
            pointer.src = 'pointerX.svg'
            turn = true
        }
         
       pointer.classList.add('pointer_O')      
        e.target.appendChild(pointer)
        
    },
 

}
const chekingGame = function(){
const firstScrn = document.querySelector('.screen')
const secondScrn = document.getElementsByClassName('1')
const thirdScrn = document.getElementsByClassName('2')
const forthScrn = document.getElementsByClassName('3')
const fifthScrn = document.getElementsByClassName('4')
const sixthScrn = document.getElementsByClassName('5')
const seventhScrn = document.getElementsByClassName('6')
const eightScrn = document.getElementsByClassName('7')
const ninethScrn = document.getElementsByClassName('8')
}

const player1 = {
    name: '',
    
}
const player2 = {
    name: '',

}
startBtn.addEventListener('click', Gameboard.render)
