var Cx, Cy;
var Diameter = 600
var Radius = Diameter/2;
var slideyboi

function setup() {
	createCanvas(400,600);
	Cx = windowWidth/2;
	Cy = windowHeight/2;

angleMode(DEGREES);

colorMode(HSB,360,100,100);	

background(0,0,0)
	
mibutton=createButton('Press Me')
mibutton.position(100,40)
mibutton.mousePressed(dotz)	

slideyboi = createSlider(0,100,0)
slideyboi.position(100,75)
slideyboi.size(100,20)

}

	
function dotz(){
  for (var j=0; j<100; j= j +1) { 
	  for (var i=0; i<100; i= i +1) {         
				fill(0,0,0);
	      ellipse(i*30,j*30,10,10);         
		   }                                        
	} 
}


	function draw(){
	fill (slideyboi.value())
	ellipse (windowWidth/2,windowHeight/2,550,550)
	
	noFill();
	strokeWeight(0);
	stroke(30,50,50)
	ellipse(Cx,Cy, Diameter, Diameter)
	
	
for (var clock = 0; clock <360; clock = clock + 360/6){
	Rainbow((clock + frameCount)%360, 100,100,Radius);
	Rainbow(30+(clock + frameCount)%360, 100,100,Radius*2+30);

}
	
for (var repeat = 0; repeat <360; repeat = repeat +30)
	Rainbow (repeat,100,100, Radius/4)
	Rainbow (repeat,100,100, Radius)

	
	
for (var ThisPhase = 0; ThisPhase < 360; ThisPhase = ThisPhase + 360/7){
	var AngleOfDot1 = (frameCount+ ThisPhase)%360;
	Rainbow2((frameCount+ ThisPhase)%360,AngleOfDot1 ,100,100, 20, Radius/4);
	Rainbow2((frameCount+ ThisPhase)%360,360-AngleOfDot1 ,100,100, 100, 450);
	Rainbow2((frameCount+ ThisPhase)%360,360-AngleOfDot1 ,100,100, 50, 200);

}


function Rainbow(HueAng,Sat,Brightness,Rad) {
	
  var Xpos = Cx + Rad*sin(HueAng);  
	var Ypos = Cy + Rad*cos(HueAng);
	fill(HueAng,Sat,Brightness); 
	noStroke();
	ellipse(Xpos,Ypos, 100,100); 
	
	
}


//new function Rainbow2
//Rainbow2 differs from Rainbow because there are two new parameters
//in the second slot there is PosAngle (which now different from HueAngle
//in the fifth slot there is HowBig which is radius of the ellipse
function Rainbow2(HueAng,PosAng,Sat,Brightness,HowBig,Rad) {
	
  var Xpos = Cx + Rad*sin(PosAng);  
	var Ypos = Cy + Rad*cos(PosAng);
	fill(HueAng,Sat,Brightness);        
	noStroke();
	ellipse(Xpos,Ypos, HowBig,HowBig);
}
}
