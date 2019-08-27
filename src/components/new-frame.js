import React from 'react';
import PostFrame from './post-frame';

class NewFrames extends React.Component {
	constructor(props) {
		super(props);
		this.postID = 1;
		this.currentTitle = 1;
		this.idSelected = 0;
		this.state = {
			postArray: [{id: this.postID, title: this.postID}],
			id: '',
			idSelected: 1
		}
	}

	deleteFrame = (index) => {
    this.state.postArray.splice(index, 1);
		this.setState({
			postArray: this.state.postArray,
		})
	};

	addFrame = () => {
		this.postID++;
		this.currentTitle++;
    this.state.postArray.push({
			id: this.postID,
      title: this.currentTitle
		});
		this.setState({
			postArray: this.state.postArray
		})
	}

	copyFrame = (id) => {
		this.postID++;
    this.state.postArray.push({
			id: this.postID,
      title: id + '\''
		});
		this.setState({
			postArray: this.state.postArray
		})
	}

	selectFrame = (id) => {
		let currentCanvas = document.getElementById('canvasFrame' + id);
		let mainCanvas = document.getElementById('canvasDraw');
        let mainCtx = mainCanvas.getContext('2d');
        let widthScale = mainCanvas.width / currentCanvas.width;
        let heightScale = mainCanvas.height / currentCanvas.height;
        mainCtx.clearRect(0,0, mainCanvas.width, mainCanvas.height);
        mainCtx.scale(widthScale, heightScale);
        mainCtx.drawImage(currentCanvas, 0, 0);
        mainCtx.scale(1/widthScale, 1/heightScale);
		this.setState({
			idSelected: id
		});
	}

	render () {
		return (
			<div className='newFrame'>
					{
						this.state.postArray.map((post, index) => {
								return(
									<PostFrame
										id = {post.id}
										key = {post.id}
                    title = {post.title}
										copy = {this.copyFrame.bind(this, post.title)}
										delete = {this.deleteFrame.bind(this, index)}
										select = {this.selectFrame.bind(this, post.id)}
										selected = {post.id === this.state.idSelected}
									/>
								)
							}
						)
					}
				<button className='addNewFrame' onClick={this.addFrame} id='addNewFrame' data-action='addNewFrame'>
					<i className='fas fa-plus'></i><p>Add new frame</p>
				</button>
			</div>
		)
	}
}

export default NewFrames;