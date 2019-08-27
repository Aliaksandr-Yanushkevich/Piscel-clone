// Eraser function
function eraser() {
	const choosenColor = document.getElementById('choosenColor');
	const color = choosenColor.value;

	var canvas = document.getElementById('canvasDraw');
	var ctx = canvas.getContext('2d');
	canvas.onmousedown = function() {
		canvas.onmousemove = function(event) {
			const x = event.offsetX;
			const y = event.offsetY;
			const rectHeight = 5;
			const rectWidth = 10;
			ctx.clearRect(x-rectHeight, y-rectHeight, rectWidth, rectWidth);
			ctx.fillStyle = color;
			ctx.fill();
		}
		canvas.onmouseup = function() {
				canvas.onmousemove = null;
		}
	}
}

export default eraser;