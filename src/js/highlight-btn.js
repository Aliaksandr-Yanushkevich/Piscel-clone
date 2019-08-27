function setElementClickHandler(actionNames) {
	const activeElement = document.getElementById(actionNames);
  if (activeElement) {
    activeElement.addEventListener('click', (event) => {
			const prevActiveElement = document.querySelector('.highlight_btn');
			if(prevActiveElement) {
				prevActiveElement.classList.remove('highlight_btn');
			}
			window.state.currentTool = actionNames;
			activeElement.classList.add('highlight_btn');
		});
	};
}

export default setElementClickHandler;
