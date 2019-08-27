// Pencil draw function
function pencilDraw(event) {
	const choosenColor = document.getElementById('choosenColor');
	const color = choosenColor.value;

	var canvas = document.getElementById('canvasDraw');
	var ctx = canvas.getContext('2d');
	var defaultCanvas = document.getElementsByClassName('selected')[0].getElementsByTagName('canvas')[0];
	var defaultCtx = defaultCanvas.getContext('2d');

    let widthScale = defaultCanvas.width / canvas.width;
    let heightScale = defaultCanvas.height / canvas.height;

	let isMouseDown = false;

	canvas.onmousedown = () => {
		isMouseDown = true;
	}

	canvas.onmousemove = (event) => {
        if (isMouseDown) {
            const x = event.offsetX;
						const y = event.offsetY;
						const pencilPointHeight = 5;
						const pencilPointWidth = 10;
            ctx.fillRect(x-pencilPointHeight, y-pencilPointHeight, pencilPointWidth, pencilPointWidth);
            ctx.fillStyle = color;
            ctx.fill();

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

export default pencilDraw;
