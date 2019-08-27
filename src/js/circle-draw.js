// Circle draw function
function circleDraw(event) {
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
			var radius = Math.pow(Math.pow(a-x, 2) + Math.pow(b-y, 2), 0.5);
			ctx.arc(x, y, radius, 0, 2*Math.PI);
			ctx.fillStyle = color;
			ctx.stroke();

			defaultCtx.clearRect(0,0, defaultCtx.width, defaultCtx.height);
			defaultCtx.scale(widthScale, heightScale);
			defaultCtx.drawImage(canvas, 0, 0);
			defaultCtx.scale(1/widthScale,1/heightScale);
		}
		canvas.onmouseup = function() {
			canvas.onmousemove = null;
		}
	}
}

export default circleDraw;