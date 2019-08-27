// Paint bucket function
function paintFigure(event) {
	const choosenColor = document.getElementById('choosenColor');
	const color = choosenColor.value;

	var canvas = document.getElementById('canvasDraw');
	var ctx = canvas.getContext('2d');
	canvas.onmousedown = function(event) {
		ctx.fillStyle = color;
		ctx.fill();
	}
	canvas.onmouseup = function() {
		canvas.onmousemove = null;
	}
}

export default paintFigure;