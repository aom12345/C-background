
var r = 0;
var g = 50;
var b=255;
var x;
function setup(){
createCanvas(1400,700);
}


function draw(){
  x=mouseX;
 if(x+50) {
   r=r+0.2;
   g=g+0.199;
   b=b-0.2;
 }
 else if(x-1) {
  r=r-2;
  g=g+1.99;
  b=b+2;
}
if (r>260||b>260||g>260) {
  r=r-1;
  b=b-1;
  g=g-1;
}
else if (g<-10||r<-10||b<-10) {
  r=r+1;
  b=b+1;
  g=g+1;
}else if (r===255||r===0||b===255||b===0||g===255||g===0) {
  if(x+50) {
    r=r+2;
    g=g+1.99;
    b=b-2;
  }
  else if(x-50) {
   r=r-2;
   g=g+1.99;
   b=b+2;
 }
} 

  background(rgb(r,g,b));
  fill("white");
ellipse(x,300,40,40,20);
  drawSprites();
}