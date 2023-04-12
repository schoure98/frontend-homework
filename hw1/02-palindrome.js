const elem = document.querySelector("input");
const output = document.getElementById("output");

handleInput = () => {
	input = elem.value;
	if (input < 0 || isNaN(input)) {
		output.textContent =
			"Invalid input. Please enter a positive numeric value.";
		output.style.color = "red";
	} else {
		let start = 0;
		let end = input.length - 1;
		while (start < end) {
			if (input[start] != input[end]) {
				output.textContent = "No. Try again.";
				output.style.color = "red";
				break;
			}
			start += 1;
			end -= 1;
			output.textContent = "Yes. This is a palindrome!";
			output.style.color = "green";
		}
	}
};

elem.addEventListener("input", handleInput);
