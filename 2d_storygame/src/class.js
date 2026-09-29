class character{
constructor(h=50,w=30,x=0,y=0,ctx){
	this.h = h;
	this.w = w;
	this.x = x;
	this.y = y;
	this.ctx = ctx;
}
draw(ctx){
	ctx.fillStyle = "gray";
	ctx.fillRect(this.x,this.y,this.w,this.h);
}
gravity(isonground,d,lerp){
	if(isonground)this.y += lerp(this.x,d,0.1);
	//console.log(lerp(this.x,d,0.1),isonground,d);
}
}
class block{
constructor(h=50,w=30,x=0,y=0,ctx){
	this.h = h;
	this.w = w;
	this.x = x;
	this.y = y;
	this.ctx = ctx;
}
draw(ctx){
	ctx.fillStyle = "green";
	ctx.fillRect(this.x,this.y,this.w,this.h);
}
}
export {character};
export {block};
