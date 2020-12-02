// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//declare constants
const dim = 20;


const apple = {
  h: appleRandom(),
  v: appleRandom(),
  width: 20,
  height: 20,
}

//create snake
let snake = [];
snake[0] = {
  x: 160,
  y: 300
}
//draw snake
function drawSnake() {
 

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, dim, dim);

    //snake grow if eat apple
    if(snake[0].x == apple.h && snake[0].y == apple.v){
      snake.push(snake[1]);
    }

    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, dim, dim);
    // change position
    if (d == "LEFT") snake[0].x -= dim;
    if (d == "UP") snake[0].y -= dim;
    if (d == "RIGHT") snake[0].x += dim;
    if (d == "DOWN") snake[0].y += dim;

    // detected side walls
    if (snake[0].x + dim > canvas.width ||
      snake[0].x < 0) {
      snake[0].x = 100;
      alert("gameover")
    }
    //replace alert with function gameover
    if (snake[0].y + dim > canvas.height ||
      snake[0].y < 0) {
      snake[0].y = 100;
      alert("gameover")
    }
    //replace alert with function gameover

    //requestAnimationFrame(update);

  }

}


function drawApple() {
  //ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.h, apple.v, apple.width, apple.height);

}
function appleRandom() {
  return Math.floor(Math.random() * 28 + 1) * dim;
}

// }
//control the snake

let d;

document.addEventListener("keydown", direction);

function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "RIGHT") {

    d = "LEFT";
  } else if (key == 38 && d != "DOWN") {
    d = "UP";

  } else if (key == 39 && d != "LEFT") {
    d = "RIGHT";

  } else if (key == 40 && d != "UP") {
    d = "DOWN";

  }
}


// animation for move snake along border
function update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake();

}

function updateGame() {
  return update(), drawApple();
}
//update();
setInterval(updateGame, 100);


//switch mode
document.addEventListener("keydown", switchMode);
function switchMode(event) {
  let key = event.keyCode;
  if (key == 32) {

  }
}

