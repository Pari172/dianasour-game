



let dino = document.querySelector(".dino");
let obstacle = document.querySelector('.obstacle');
let count=0;
let jump_audio = new Audio("JavaScript Dragon Game/Mario Jump.mp3");
let gameover = new Audio("JavaScript Dragon Game/Mario Death.mp3");

document.onkeydown = function(e){
    if(e.keyCode===38){
        dino.classList.add('jump');
        jump_audio.play();
        count+=10;
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 700);

    }
    if(e.keyCode===39){
        let dino_left = dino.getBoundingClientRect().left;
        dino.style.transition = "left 0.5s ease";
        dino.style.left = dino_left+100 + "px";
    }
    if(e.keyCode===37){
        let dino_left = dino.getBoundingClientRect().left;
        dino.style.transition = "left 0.5s ease";
        dino.style.left = dino_left-100 + "px";
    }
    //console.log(e.keyCode);
}

setInterval(() => {

    let dino_left = dino.getBoundingClientRect().left;
    let dino_right = dino.getBoundingClientRect().right;
    let dino_top = dino.getBoundingClientRect().top;
    let dino_bottom = dino.getBoundingClientRect().bottom;
    
    let obstacle_left = obstacle.getBoundingClientRect().left;
    let obstacle_right = obstacle.getBoundingClientRect().right;
    let obstacle_top = obstacle.getBoundingClientRect().top;
    let obstacle_bottom = obstacle.getBoundingClientRect().bottom;

    if(dino_top<obstacle_bottom &&
        dino_right>obstacle_left &&
        dino_bottom>obstacle_top &&
        dino_left<obstacle_right){
            gameover.play();
            
            var userConfirmed = confirm("Game Over! \n Click On OK to Restart The Game");

            if (userConfirmed) {
                location.reload();
            } else {
                alert(`Your Current Score is ${count}`);
            }
            count=0;

        }else{
            let score = document.querySelector("#scoreCount");
            score.textContent  = `Your Score : ${count}`;
        }
}, 100);