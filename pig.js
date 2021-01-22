class Pig {

constructor(x,y){
var options={
friction:0.3,
restituition:0.8,
density:1.0
}
this.body=Bodies.rectangle(x,y,50,50,options);
this.height=50;
this.width=50;

World.add(world, this.body);
}

display(){

var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill('blue');
rect(0,0,this.width,this.height);
pop();

}







}