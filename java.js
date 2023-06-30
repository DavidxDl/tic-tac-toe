const resetBtn = document.querySelector('.Reset')
const gameBoard = document.querySelector('.Gameboard');
const gameOverScreen = document.querySelector('.gameover')
const play_again_btn = document.querySelector('.playagain')
const winner = document.querySelector('.winner_Text')
const player1Score = document.querySelector('.player1_Score')
const player2Score = document.querySelector('.player2_Score')
let turn = true
let checkClass = turn === true?'checked':'checked'
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1 ,4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
]
function checkDraw() {
    return [...screens].every(screen => {
        return screen.dataset.value === 'checkedO' || screen.dataset.value === 'checkedX'
    })
      
}
function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return screens[index].dataset.value === 'checkedO' && turn == false || screens[index].dataset.value === 'checkedX' && turn == true
        })
    })
}
const Gameboard = {


    reset(){
        
        turn = true
        player1.score = 0
        player2.score = 0
        player1Score.textContent = player1.score
        player2Score.textContent = player2.score
        
        Gameboard.render()


    },
    

     render() {
        gameOverScreen.style.display = 'none'
            screens.forEach((screen) => screen.remove());
            turn = true

    
        for (let i = 0; i < 9; i++){
        const screen = document.createElement('div');
        screen.classList.add(`screen`);
        screen.dataset.value = 'unchecked'

       // screen.classList.add(`${i}`);

        gameBoard.appendChild(screen)

    };
    
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen) => screen.addEventListener('click', Gameboard.addPointer, {once: true}));
},
    addPointer(e) {
        const pointer = document.createElement('img')
        if(turn == true){
            pointer.src = 'pointer.svg'
            turn = false
            e.target.dataset.value = 'checkedO'
            pointer.classList.add('pointer_O') 
        }
        else{
            pointer.src = 'pointerX.svg'
            turn = true
            e.target.dataset.value = 'checkedX' 
            pointer.classList.add('pointer_X') 
        }
          
        e.target.appendChild(pointer)
        
        if(checkWin()){ 
            gameOverScreen.style.display = 'flex'
            if(turn == true){
                winner.textContent = 'X Is the winner!'
                player1.score++
                player1Score.textContent = player1.score

            }
            else{
                winner.textContent = 'O Is the winner!'
                player2.score++
                player2Score.textContent = player2.score
            } 
        }
        else if(checkDraw()){
            gameOverScreen.style.display = 'flex'
            winner.textContent = 'Draw!'
        }
    },
    
    
}
let screens = document.querySelectorAll('.screen')
const player1 = {
    name: 'Player1',
    score: 0,
    
}
const player2 = {
    name: 'Player2',
    score: 0,

}
play_again_btn.addEventListener('click', Gameboard.render)
resetBtn.addEventListener('click', Gameboard.reset)
addEventListener('DOMContentLoaded', Gameboard.render)
