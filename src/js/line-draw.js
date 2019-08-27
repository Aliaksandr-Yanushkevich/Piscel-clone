// Line draw function
function lineDraw() {
	const choosenColor = document.getElementById('choosenColor');
	const color = choosenColor.value;
	
	var canvas = document.getElementById('canvasDraw');
	var ctx = canvas.getContext('2d');
	var defaultCanvas = document.getElementsByClassName('selected')[0].getElementsByTagName('canvas')[0];
	var defaultCtx = defaultCanvas.getContext('2d');

	let widthScale = defaultCanvas.width / canvas.width;
	let heightScale = defaultCanvas.height / canvas.height;

	let isMouseDown = false;

	canvas.onmousedown = (event) => {
		isMouseDown = true;
		const x = event.offsetX;
		const y = event.offsetY;
		ctx.moveTo(x, y);
	}

	canvas.onmousemove = (event) => {
    if (isMouseDown) {
			const a = event.offsetX;
			const b = event.offsetY;
			ctx.lineTo(a, b);
			ctx.lineWidth = 3;
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.stroke();

			defaultCtx.clearRect(0,0, defaultCtx.width, defaultCtx.height);
			defaultCtx.scale(widthScale, heightScale);
			defaultCtx.drawImage(canvas, 0, 0);
			defaultCtx.scale(1/widthScale,1/heightScale);
		}
	}

	canvas.onmouseup = () => {
		isMouseDown = false;
	}
}

export default lineDraw;