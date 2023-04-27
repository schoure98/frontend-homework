const elem = document.querySelector("input");
const output = document.getElementById("output");

const palindromeChecker = (input) => {
	let start = 0;
	let end = input.length - 1;
	while (start < end) {
		if (input[start] !== input[end]) {
			return false;
		}
		start += 1;
		end -= 1;
	}
	return true;
};

handleInput = (input) => {
	input = elem.value;
	if (input < 0 || isNaN(input)) {
		output.textContent =
			"Invalid input. Please enter a positive numeric value.";
		output.style.color = "red";
	} else if (input.length == 0) {
		output.textContent = null;
	} else if (palindromeChecker(input)) {
		output.textContent = "Yes. This is a palindrome!";
		output.style.color = "green";
	} else {
		output.textContent = "No. Try again.";
		output.style.color = "red";
	}
};

elem.addEventListener("input", handleInput);
