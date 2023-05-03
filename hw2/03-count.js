const input = document.getElementById("input");
const text = document.getElementById("text");

const handleKeyUp = () => {
	const words = text.textContent.split(/\b/);

	const highlightedWords = [];
	words.forEach((word) => {
		if (input.value === word) {
			highlightedWords.push(
				`<mark style="background-color: yellow">${word}</mark>`
			);
		} else {
			highlightedWords.push(word);
		}
	});
	text.innerHTML = highlightedWords.join("");
};

input.addEventListener("keyup", handleKeyUp);
