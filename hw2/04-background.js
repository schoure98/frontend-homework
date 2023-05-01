const toggleButton = document.getElementById("toggleButton");
const input = document.getElementById("number");
const container = document.getElementById("container");

getRandomNumber = (max) => {
	return Math.floor(Math.random() * max);
};

changeBackgroundColor = (maxRGB = 256) => {
	const red = getRandomNumber(maxRGB);
	const green = getRandomNumber(maxRGB);
	const blue = getRandomNumber(maxRGB);
	const alpha = 0.5; //to dim the color value
	container.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

let intervalDuration = setInterval(() => {
	changeBackgroundColor();
}, 3000);

//toggle Button to start and stop
handleChange = (event) => {
	if (toggleButton.value === "Start") {
		let userDuration = input.value * 1000;
		intervalDuration = setInterval(changeBackgroundColor, userDuration);
		toggleButton.value = "Stop";
		toggleButton.className = "btn btn-danger my-3";
	} else {
		clearInterval(intervalDuration);
		input.value = "";
		toggleButton.value = "Start";
		toggleButton.className = "btn btn-primary my-3";
	}
	event.preventDefault();
};

toggleButton.addEventListener("click", handleChange);
