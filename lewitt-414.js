colorMode (HSB);
var x = 0;
var y = 0;

function squares(){
  
fill (0, 0, random (10, 100) );
rect (x, y, 40, 40);
  
fill (0, 0, random (10, 100) );
rect (x + 50, y, 40, 40);
  
fill (0, 0, random (10, 100) );
rect (x + 50, y + 50, 40, 40);
  
fill (0, 0, random (10, 100) );
rect (x, y + 50, 40, 40);
}

for (var x = 0; x < width-20; x+=100){
for (var y = 0; y < height-20; y+=100){
squares();
}
}
