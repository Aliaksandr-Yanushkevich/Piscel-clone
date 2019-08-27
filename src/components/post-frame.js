import React from 'react';

class PostFrame extends React.Component {

	render () {
		return (
			<div className={'frame ' + (this.props.selected ? "selected" : "")} onClick={this.props.select}>
				<canvas className='canvasFrame' id={'canvasFrame' + this.props.id} height='150px' width='150px'></canvas>
				<p>{this.props.title}</p>
				<button className='copy' id='copy' data-action='copy' onClick = {this.props.copy}>
					<i className="fas fa-copy"></i>
				</button>
				<button className='delete' id='delete' data-action='delete' onClick = {this.props.delete}>
					<i className='fas fa-trash-alt'></i>
				</button>
			</div>
		);
	}
}

export default PostFrame