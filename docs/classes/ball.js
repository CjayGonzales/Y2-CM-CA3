class Ball {
	constructor(radius, color, x, y, rotation, scaleX, scaleY, lineWidth) {
	if (radius === undefined) { radius = 40; }
	if (color === undefined) { color = "#ff0000"; }
	this.radius = radius;
	this.color = color;
	this.x = x;
	this.y = y;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.lineWidth = 1;
 }
	draw(context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
  
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.beginPath();
	//x, y, radius, start_angle, end_angle, anti-clockwise
	context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
	context.closePath();
	context.fill();
	if (this.lineWidth > 0) {
		context.stroke();
  }
  context.restore();
}

}