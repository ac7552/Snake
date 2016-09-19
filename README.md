# Snake 


## Motivation: 
    As a huge fan of Super Mario I thought it would be great to add my a personal twist to a classic game. 

## Languages Used: 
   CSS, Javascript, HTML5 - Canvas 

## Additional Resources: 
    None

## How to Play: 
   Press the Right Arrow Key to move right
   
   Press the Up Arrow Key to move up 
   
   Press the Down Array key to move down 
   
   Press the Left Array key to move left
   
   
## Code Snippet of Snake addBody function && render Apple function
````Javascript 
  function addBody(){ 
//part 1 of body
//what is last body? 
if(snake.length <= 4){ 
   snake.push(snake[0]+10); 
   snake.push(snake[1]);
} else if(snake.length >= 6 ){
  snake.push(snake[snake.length - 2] + 10) ;
  snake.push(snake[snake.length -2]);
     }

document.getElementById("scores").innerHTML = (snake.length - 6)/2 ;
}


 
function drawFood() { 
context.beginPath();
context.arc(food_x,food_y, 5, 0, 2* Math.PI);
context.fillStyle = "yellow";
context.fill();
context.stroke();
context.closePath();

```
