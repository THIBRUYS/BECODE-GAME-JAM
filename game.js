
// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//declare constants and variables
const dim = 20;
let move = new Audio();
let eat = new Audio();
let dead = new Audio();

move.src = "sounds/move.mp3";
eat.src = "sounds/eat.mp3";
dead.src = "sounds/dead.mp3";

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
    eat.play();

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
    dead.play();

    // alert("game over!")   //here we need to replace alert with function gameover
    //document.getElementById("displayScore").innerHTML = "you lose!"

    ctx.fillStyle = "red";
    ctx.fillRect(100, 50, 400, 200);
    ctx.fillStyle = "white";
    ctx.font = "70px Changa one";
    ctx.fillText("you lose", 200, 150);
    ctx.font = "30px Changa one";
    ctx.fillText("press F2 to restart the game", 140, 200);

    clearInterval(game);
    alert("game over!")   //here we need to replace alert with function gameover
    // EndGame()
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
    move.play();
    d = "LEFT";
  } else if (key == 38 && d != "DOWN") {
    move.play();
    d = "UP";
  } else if (key == 39 && d != "LEFT") {
    move.play();
    d = "RIGHT";
    move.play();
  } else if (key == 40 && d != "UP") {
    move.play();
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


//restart the game
document.addEventListener("keydown", restart);
function restart(event) {
  let key = event.keyCode;
  if (key == 113) {
    location.reload();
  }
}


