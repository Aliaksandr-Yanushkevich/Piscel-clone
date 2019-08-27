import React from 'react';

class SettingsTool extends React.Component {
	render () {
		return (
			<div className="settingsTool">
						<button className="paintBucket" id="paint_bucket" data-action="paintBucket">
							<i className="fas fa-cog"></i>
						</button>
						<button className="paintBucket" id="paint_bucket1" data-action="paintBucket1">
							<i className="fas fa-expand-arrows-alt"></i>
						</button>
						<button className="paintBucket" id="paint_bucket2" data-action="paintBucket2">
							<i className="far fa-save"></i>
						</button>
						<button className="paintBucket" id="paint_bucket3" data-action="paintBucket3">
							<i className="fas fa-image"></i>
						</button>
						<button className="paintBucket" id="paint_bucket4" data-action="paintBucket4">
							<i className="far fa-folder-open"></i>
						</button>
			</div>
		);
	}
}

export default SettingsTool;