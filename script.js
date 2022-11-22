const character = document.querySelector('.character');
const obstacle = document.querySelector('.obstacle');

const jump = () => {
    character.classList.add('jump');

    setTimeout(() =>{
        character.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    console.log('loop')

    const obstaclePosition = obstacle.offsetLeft;
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');
    
    if (obstaclePosition <= 120 && obstaclePosition > 0 && characterPosition < 80){
        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;
        
        character.style.animation = 'none';
        character.style.left = `${obstaclePosition}px`;

        character.src = 'character-death.png';

        clearInterval(loop);
    }


}, 10);

document.addEventListener('keydown', jump);