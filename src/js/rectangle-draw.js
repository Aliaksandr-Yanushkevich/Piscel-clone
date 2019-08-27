// Rectangle draw function
function rectangleDraw() {
	const choosenColor = document.getElementById('choosenColor');
	const color = choosenColor.value;
	
	var canvas = document.getElementById('canvasDraw');
	var ctx = canvas.getContext('2d');
	var defaultCanvas = document.getElementsByClassName('selected')[0].getElementsByTagName('canvas')[0];
	var defaultCtx = defaultCanvas.getContext('2d');

    let widthScale = defaultCanvas.width / canvas.width;
    let heightScale = defaultCanvas.height / canvas.height;

	canvas.onmousedown = function(event) {
		const x = event.offsetX;
		const y = event.offsetY;
		canvas.onmousemove = function(event) {
			const a = event.offsetX;
			const b = event.offsetY;
			const lineWeight = 3;
			ctx.rect(x, y, a-x, b-y);
			ctx.lineWidth = lineWeight;
			ctx.fillStyle = color;
			
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.stroke();

			defaultCtx.clearRect(0,0, defaultCtx.width, defaultCtx.height);
			defaultCtx.scale(widthScale, heightScale);
			defaultCtx.drawImage(canvas, 0, 0);
			defaultCtx.scale(1/widthScale,1/heightScale);
		}
		canvas.onmouseup = function() {
			canvas.onmousemove = null;
			ctx.closePath();
		}
	}
}

export default rectangleDraw;