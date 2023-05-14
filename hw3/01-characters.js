// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

let app = document.querySelector("#results");
let row = document.querySelector(".row");

const charactersToDOM = (chars) => {
	//character card
	let card = document.createElement("div");
	card.classList.add("figure", "col-md-3", "col-6");

	//character image
	let imageContainer = document.createElement("div");
	imageContainer.classList.add(
		"d-flex",
		"justify-content-center",
		"align-items-center"
	);
	let image = document.createElement("img");
	image.src = chars.imageUrl;
	image.alt = `picture of ${chars.image}`;
	image.width = 200;
	image.height = 250;
	imageContainer.append(image);
	card.append(imageContainer);

	//character name
	let name = document.createElement("h1");
	name.textContent = chars.fullName;
	name.classList.add("name", "text-center", "fw-bold");
	card.append(name);

	//character title
	let title = document.createElement("p");
	title.textContent = chars.title;
	title.classList.add("text-center", "fw-bold");
	card.append(title);

	row.append(card);
};

const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		data.forEach((char) => charactersToDOM(char));
	} catch (error) {
		console.log(error);
	}
};
fetchData(url);
