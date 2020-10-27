// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// coordinates for snake
const snake = {
  x: 150,
  y: 300,
  width: 20,
  height: 20,
  // step for move on playground
  dx: 2,
  dy: 2,
}

const apple = {
  h: appleRandom(),
  v: appleRandom(),
  width: 20,
  height: 20,
}

// vars for center of playground
//const centerX = canvas.width / 2;
//const centerY = canvas.height / 2;

// draw snake
// function draw(drawSnake,drawApple){
function drawSnake() {
  //ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
  
}
function drawApple() {
  //ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.h, apple.v, apple.width, apple.height);
 
}
function appleRandom(){
  return Math.floor(Math.random() * 580);   
}

// }
//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
    
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        
    }
}


// animation for move snake along border
function update() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  drawSnake();
  
  // change position
  if( d == "LEFT") snake.x -= snake.dx;
  if( d == "UP") snake.y -= snake.dy;
  if( d == "RIGHT") snake.x += snake.dx;
  if( d == "DOWN") snake.y += snake.dy;

  // detected side walls
  if(snake.x + snake.width > canvas.width ||
      snake.x + snake.width < snake.width) {
        snake.dx = 0;
        alert("gameover")}
        //replace alert with function gameover
  if(snake.y + snake.height > canvas.height ||
      snake.y + snake.height < snake.height) {
        snake.dy = 0;
      alert("gameover")}
      //replace alert with function gameover

  //requestAnimationFrame(update);

}

function updateGame(){
return update(),drawApple();
}
//update();
setInterval(updateGame,5);


//switch mode
document.addEventListener("keydown",switchMode);
function switchMode(event){
  let key = event.keyCode;
  if(key == 32){
  
  }
}

