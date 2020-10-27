// declare context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// coordinates for snake
const snake = {
  x: 300,
  y: 300,
  width: 20,
  height: 20,
  dx: 2,
  dy: 2,
}


// draw snake
function drawSnake() {
  
  ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
  ctx.fillStyle = 'green';
}

// animation for move snake along border
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake();

  // change position
  snake.x += snake.dx;
  // snake.y += snake.dy;

  // detected side walls
  if(snake.x + snake.width > canvas.width ||
      snake.x + snake.width < snake.width) {
        snake.dx *= -1;}

  requestAnimationFrame(update);
}

update();