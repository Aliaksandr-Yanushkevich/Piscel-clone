import React from 'react';

class Tools extends React.Component {
	render () {
		return (
			<div className='paintTools'>
				<button className='pencil' id='pencil' data-action='pencil'>
					<i className='fas fa-pencil-alt'></i>
				</button>
				<button className='line' id='line' data-action='line'>
					<i className="fab fa-line"></i>
				</button>
				<button className='rectangle' id='rectangle' data-action='rectangle'>
					<i className="far fa-square"></i>
				</button>
				<button className='circle' id='circle' data-action='circle'>
					<i className="far fa-circle"></i>
				</button>
				<button className='paintBucket' id='paint_bucket' data-action='paintBucket'>
					<i className='fas fa-fill-drip'></i>
				</button>
				<button className='eraser' id='eraser' data-action='eraser'>
					<i className="fas fa-eraser"></i>
				</button>
				<input className='choosenColor' id='choosenColor' type='color'/>
			</div>
		);
	}
}

export default Tools;