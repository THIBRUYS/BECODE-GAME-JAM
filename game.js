// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//declare constants
const dim = 20;

//create apple !!!changed
let apple = {
  x: appleRandom(),
  y: appleRandom(),
}

//create snake
let snake = [];
snake[0] = {
  x: 160,
  y: 300
}
//Score part
let scoreArea = document.getElementById('displayScore');
let score = 0;
let scoreUpdate = () => {
  score += 1;
  scoreArea.innerHTML = score;
}

//draw snake
function drawSnake() {

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? "ForestGreen" : "SeaGreen";
    ctx.fillRect(snake[i].x, snake[i].y, dim, dim);

    ctx.strokeStyle = (i == 0) ? "red" : "black";
    ctx.strokeRect(snake[i].x, snake[i].y, dim, dim);
  }

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // change direction
  if (d == "LEFT") snakeX -= dim;
  if (d == "UP") snakeY -= dim;
  if (d == "RIGHT") snakeX += dim;
  if (d == "DOWN") snakeY += dim;


  // if the snake eats the food
  if (snakeX == apple.x && snakeY == apple.y) {
    scoreUpdate();
    console.log(score)
    apple = {
      x: appleRandom(),
      y: appleRandom(),
    }
    // we don't remove the tail
  } else {
    // removing the tail
    snake.pop();
  }
 
  // adding new Head
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  // detected side walls
  if (snakeX < 0 || snakeX > canvas.width - dim || snakeY < 0 || snakeY > canvas.height - dim) {

    clearInterval(game);
    alert("game over!")   //here we need to replace alert with function gameover

  }
  // snake growing 
  snake.unshift(newHead);
}


function drawApple() {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.x, apple.y, dim, dim)

}

function appleRandom() {
  return Math.floor((Math.random() * 29) + 1) * dim;
}

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
//update every 100 microseconds;
let game = setInterval(updateGame, 200);


//switch mode
document.addEventListener("keydown", switchMode);
function switchMode(event) {
  let key = event.keyCode;
  if (key == 32) {

  }
}

