import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CanvasCoordinates from './canvasCoordinates';

const Canvas = () => {
	const [coordinates, setCoordinates] = useState({ x: 0,	y: 0 });
	const getMousePos = (e) => {
		const canvas = e.target;
	
		const rect = canvas.getBoundingClientRect();
		const coordinates = {
			x: (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
			y: (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height,
		};
		const xNew = Math.floor(coordinates.x);
		const yNew = Math.floor(coordinates.y);
		return { x: xNew, y: yNew };
	};
	
	const showCanvasCoordinates = (event) => {
		const currentCoord = getMousePos(event)
		setCoordinates(currentCoord);
	}

	return (
		<div className='canvas'>
				<canvas onMouseMove={showCanvasCoordinates} id='canvasDraw' width='600' height='600'></canvas>
				<CanvasCoordinates coordinates={coordinates}/>
		</div>
	);
};

Canvas.propTypes = {
	setCoordinates: PropTypes.func,
};

Canvas.defaultProps = {
	setCoordinates: () => ({ x: 0, y: 0 }),
};

export default Canvas;