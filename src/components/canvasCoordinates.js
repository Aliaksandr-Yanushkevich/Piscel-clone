import React from 'react';
import PropTypes from 'prop-types';

function CanvasCoordinates({coordinates}) {
		return (
			<div className='canvasCoordinates'>
				<p>{ `Coordinates: ${coordinates.x}:${coordinates.y}` }</p>
				<p>Canvas size: 600x600</p>
			</div>
		);
};

CanvasCoordinates.propTypes = {
	coordinates: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
};

CanvasCoordinates.defaultProps = {
  coordinates: { x: 0, y: 0 },
};

export default CanvasCoordinates;