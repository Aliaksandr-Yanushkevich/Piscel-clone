import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import './index.css';
import App from './App';
//JS functions
import setElementClickHandler from './js/highlight-btn';
import pencilDraw from './js/pencil-draw';
import lineDraw from './js/line-draw';
import rectangleDraw from './js/rectangle-draw';
import circleDraw from './js/circle-draw';
import paintFigure from './js/paint-bucket';
import eraser from './js/eraser';

ReactDOM.render(<App />, document.getElementById('root'));

// Humburger button
$('.humburger_btn').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('menu_btn_active');
});

// Hilighting paint-tools buttons
window.state = {
	currentTool: ''
};

const actionContainer = {
	pencil: pencilDraw,
	line: lineDraw,
	rectangle: rectangleDraw,
	circle: circleDraw,
	paint_bucket: paintFigure,
  eraser: eraser
}

const actionNames = ['pencil', 'line', 'rectangle', 'circle', 'paint_bucket', 'eraser'];

actionNames.forEach(setElementClickHandler);

document.querySelector('#canvasDraw').addEventListener('click', (event) => {
	const currentTool = actionContainer[window.state.currentTool];
	if (currentTool) {
		currentTool(event);
	} else {
		console.log('unknown current tool', window.state.currentTool);
	}
})

// Initialize draw functions
window.addEventListener('load',function() {
	init();
},false);

function init() {
	// pencilDraw
	pencilDraw();
	// lineDraw
	lineDraw();
	// rectangleDraw
	rectangleDraw();
	// circleDraw
	circleDraw();
	// PaintBucket
	paintFigure();
	// Eraser
	eraser();
}