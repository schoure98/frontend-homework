const backgroundColors = [
	"rgba(54, 162, 235, 0.8)",
	"rgba(255, 206, 86, 0.8)",
	"rgba(255, 99, 132, 0.8)",
	"rgba(75, 192, 192, 0.8)",
	"rgba(153, 102, 255, 0.8)",
	"rgba(255, 159, 64, 0.8)",
	"rgba(199, 199, 199, 0.8)",
	"rgba(83, 102, 255, 0.8)",
	"rgba(40, 159, 64, 0.8)",
	"rgba(210, 199, 199, 0.8)",
	"rgba(78, 52, 199, 0.8)",
];

const borderColors = [
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(255, 99, 132, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
	"rgba(159, 159, 159, 1)",
	"rgba(83, 102, 255, 1)",
	"rgba(40, 159, 64, 1)",
	"rgba(210, 199, 199, 1)",
	"rgba(78, 52, 199, 1)",
];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

//fetch api
const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		const apiData = await response.json();

		const allFamilies = apiData.map((character) => character.family);

		allFamilies.forEach((house, index) => {
			if (house.includes("Lanister")) {
				allFamilies[index] = "House Lannister";
			}
		});

		const houseCounts = allFamilies.reduce((accumulator, house) => {
			let existingHouse = false;

			for (let key in accumulator) {
				if (key.includes(house)) {
					accumulator[key] += 1;
					existingHouse = true;
					break;
				}
				if (!key.startsWith("House") && accumulator[key] == 1) {
					accumulator["Others"] = 1;
					existingHouse = true;
					break;
				}
				if (key == "None" || key == "Unknown" || key == "Unkown") {
					accumulator["Unknown"] += 1;
					existingHouse = true;
					break;
				}
			}
			if (!existingHouse) {
				accumulator[house] = 1;
			}

			return accumulator;
		}, {});

		let labelsData = Object.keys(houseCounts);
		let countsData = Object.values(houseCounts);

		return { labelsData, countsData };
	} catch (error) {
		console.log("Error: ", error);
	}
};
fetchData(url).then(({ labelsData, countsData }) =>
	renderChart(labelsData, countsData)
);

const renderChart = (labelsData, countsData) => {
	const donutChart = document.querySelector(".donut-chart");

	new Chart(donutChart, {
		type: "doughnut",
		data: {
			labels: labelsData,
			datasets: [
				{
					label: "Count: ",
					data: countsData,
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
				},
			],
		},
	});
};

renderChart();
