function setup() { 
createCanvas(400, 400);
} 

function draw() { 
background(255);
	
var x = 10; 
while(x < width){
line(mouseX, mouseY, x, 10); 
x = x + 10; 
}
}
