
$(function() {
var canvas  = document.getElementById("mycanvas"); 
context = canvas.getContext('2d'); 
width = canvas.width; 
height = canvas.height; 
var x = 0;
var y =0; 
var snake_flag = 0;
var snake = [300,200,10,10]; 
var food_x = Math.floor((Math.random()*width)+1) ;
var food_y = Math.floor((Math.random()*height)+1);

//create board
function board(){
context.fillStyle="#FFF";
context.fill();
context.beginPath();
context.stroke();
context.strokeStyle="#000";
context.strokeRect(0,0,width  ,height);
}



function drawSnake(){ 
	context.clearRect(0,0, width, height);
	 board();
         drawFood();
		 //create temp1 assign first element 
	 var temp1 = snake[0];
	 //create temp2 assign second element 
	 var temp2 = snake[1]; 
 	 var temp3;
	 var temp4; 
	
	// key control switch x & y postion 
         if(snake_flag == 0 ){
           x -= 10 ;
  	  }else if ( snake_flag == 1) { 
           y -= 10 ;
         }else if (snake_flag == 2) { 
	   x += 10 ;
         }else if (snake_flag == 3) { 
 	   y += 10;
         } 
	temp1 = snake[0];
        temp2 = snake[1];
        for(i = 4; i < snake.length; i=i+2) { 
		if(i == 4) { 
		 temp3  = snake[i] ; 
		 temp4 =  snake[i+1];  
		 snake[i] = temp1; 
		  snake[i+1] = temp2;  
		}else if( i >=6 ) { 
	         temp1 = snake[i]; 
		 temp2 = snake[i+1];  
		 snake[i] = temp3; 
		 snake[i+1] = temp4; 
		temp3 = temp1;
		temp4 = temp2;
		} 
	
	}
	snake[0] = snake[0] + x; 
	snake[1] = snake[1] + y;
        context.beginPath();
	//draw head 
	context.rect(snake[0], snake[1], snake[2],snake[3]); 
        context.fillStyle = "red";
        context.fill(); 	
        context.stroke();
        context.closePath();
	for(i = 4; i < snake.length; i=i+2 ) { 
		if( i  % 2  == 0 )  {
			context.beginPath();
       			 //draw head
		       context.rect(snake[i] , snake[i+1], snake[2], snake[3] );
        		context.fillStyle = "blue";
        		context.fill();
        		context.stroke();
        		context.closePath();
                        }
		 if(snake[0]  == snake[i] && snake[i+1] == snake[1]) {
                clearInterval(timed);
                }
          }
                x = 0;
                y = 0;
}


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

} 


function check(e) {
    var code = e.keyCode;
    //Up arrow pressed
     if (code == 37 && snake_flag != 2 ) {
	snake_flag=0;
 }else if( code == 38 && snake_flag != 3){ 
snake_flag = 1;
 } else if ( code == 39 && snake_flag != 0){ 
snake_flag = 2;
 }else if (code == 40 && snake_flag != 1){ 
snake_flag =3 ; 
  } 
}


var timed = setInterval(function() {drawSnake();}, 200);
 
function wall_collision(){ 
if(snake[1] < 0) {
 clearInterval(timed);

}else if(snake[0] > 390) {
 clearInterval(timed);
}else if(snake[0] < 0 ){ 
 clearInterval(timed); 
  }else if(snake[1] >  390){
 clearInterval(timed);
} 
 
 
} 

function food_collision(){ 
if((snake[0] >  food_x - 13  &&  snake[0] < food_x + 13) && (snake[1] > food_y - 10  && snake[1] < food_y + 10) ){
addBody();
food_x = Math.floor((Math.random()*width)+1) ;
food_y = Math.floor((Math.random()*height)+1);
   
 } 
} 


addBody();
//check for event keydown
window.addEventListener('keydown',check,false);
setInterval(function(){
food_collision();
wall_collision();
},200);

});
