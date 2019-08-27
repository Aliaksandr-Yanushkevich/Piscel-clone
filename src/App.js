import React, { useState }from 'react';
import './App.css';
import './bootstrap.css';
import Nav from './components/nav';
import Tools from './components/paint-tools';
import NewFrames from './components/new-frame';
import Canvas from './components/canvas';
import Preview from './components/preview';
import SettingsTool from './components/settings-tool';

let count = 0;
const App = ({ init }) => {
	const [fps, setFps] = useState('50');

	//  Start animation function
const requestAnimationFrame = () => {
	const frameElements = document.getElementsByClassName('canvasFrame');

	setInterval(() => {
		var canvasFrame = frameElements[count];
		var animatedFrame = document.getElementsByClassName('previewFrame')[0].getElementsByTagName('canvas')[0];
		var animatedCtx = animatedFrame.getContext('2d');
	
			let widthScale = animatedFrame.width / canvasFrame.width;
			let heightScale = animatedFrame.height / canvasFrame.height;

			animatedCtx.clearRect(0,0, animatedFrame.width, animatedFrame.height);
			animatedCtx.scale(widthScale, heightScale);
			animatedCtx.drawImage(canvasFrame, 0, 0);
			animatedCtx.scale(1/widthScale,1/heightScale);
		count++;
		if (count >= frameElements.length) count = 0;
	}, 1000/fps)
}

	return (
			<div className="main">
				<Nav />
				<section className="canvas_palette_colors">
					<Tools />
					<NewFrames />
					<Canvas />
					<Preview setFps={ setFps } fps={ fps } fpsBtn={ requestAnimationFrame }/>
					<SettingsTool />
				</section>
			</div>
	);
};

export default App;
