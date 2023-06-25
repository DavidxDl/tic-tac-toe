const startBtn = document.querySelector('.Start')

const screens = document.querySelectorAll('.screen')
const gameBoard = document.querySelector('.Gameboard');

const Gameboard = {

     render() {
            gameBoard.innerHTML = ''
    
        for (let i = 0; i < 9; i++){
        const screen = document.createElement('div');
        screen.classList.add('screen');
        gameBoard.appendChild(screen)

    };
    const screens = document.querySelectorAll('.screen'); // Move this line inside the render method
    screens.forEach((screen) => screen.addEventListener('click', Gameboard.addPointer));
},
    addPointer(e) {
        console.log('Am working xD')
        const pointer = document.createElement('img')
        pointer.classList.add('pointer_O')
        pointer.src = './pointer.svg'
        e.target.append(pointer)
    },
 

}

const player1 = {
    name: '',
    
}
const player2 = {
    name: '',

}
startBtn.addEventListener('click', Gameboard.render)
