import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ setFps, fps, fpsBtn }) => {	
	const handleFpsChange = (event) => {
		setFps(event.target.value);
	}

	return (
		<div className="preview">
			<div className="previewFrame" >
				<canvas id='canvasPreview' width='250' height='244'></canvas>
				<p className='preview FSP'>
					<label htmlFor='range'>{fps} FSP</label>
					<input id='range' type='range' min='1' max='25' step='1' onChange={handleFpsChange}></input>
				</p>
				<button className='fpsBtn' onClick={ fpsBtn }>Start animation</button>
			</div>
		</div>
	);
};

Preview.propTypes = {
	setFps: PropTypes.func,
	fps: PropTypes.string,
};

Preview.defaultProps = {
  setFps: () => (console.log('error')),
	fps: '0',
};

export default Preview;