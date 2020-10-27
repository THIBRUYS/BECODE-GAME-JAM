// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// coordinates for snake
const snake = {
  x: 150,
  y: 300,
  width: 20,
  height: 20,
  dx: 2,
  dy: 2,
}
// vars for center of playground
//const centerX = canvas.width / 2;
//const centerY = canvas.height / 2;

// draw snake
function drawSnake() {
  //ctx.beginPath();
  ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
  ctx.fillStyle = 'green';
}
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
        snake.x = 0;}

  //requestAnimationFrame(update);
}


//update();
setInterval(update,5);


//switch mode
document.addEventListener("keydown",switchMode);
function switchMode(event){
  let key = event.keyCode;
  if(key == 32){
  
  }
}