// Color picker
function getColor(event) {
  const prevColor = document.getElementById('colorPicker').style.backgroundColor;
  console.log(prevColor)
	document.getElementById('chosen_color').style.backgroundColor = event.target.style.backgroundColor || 'none';
	if (event.target.style.backgroundColor) {
		document.getElementById('previous_color').style.backgroundColor = prevColor || 'white';
  }
}

export default getColor;