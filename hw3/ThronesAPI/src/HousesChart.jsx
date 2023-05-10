import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const url = "https://thronesapi.com/api/v2/Characters";

const HousesChart = () => {
  const [houseCounts, setHouseCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const apiData = response.data;

        const allFamilies = apiData.map((character) => character.family);
        allFamilies.forEach((house, index) => {
          if (house.includes("Lanister")) {
            allFamilies[index] = "House Lannister";
          }
        });

        const counts = allFamilies.reduce((accumulator, house) => {
          let existingHouse = false;

          for (let key in accumulator) {
            if (key.includes(house)) {
              accumulator[key] += 1;
              existingHouse = true;
              break;
            }
            if (!key.startsWith("House") && accumulator[key] === 1) {
              accumulator["Others"] = 1;
              existingHouse = true;
              break;
            }
            if (key === "None" || key === "Unknown" || key === "Unkown") {
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
        setHouseCounts(counts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const houseWiseData = {
    labels: Object.keys(houseCounts),
    datasets: [
      {
        label: "Count: ",
        data: Object.values(houseCounts),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <NavbarComponent />
      <Container>
        <h1 style={{ textAlign: "center" }}>Houses of Characters</h1>
        <div>
          <Doughnut data={houseWiseData} />
        </div>
      </Container>
    </div>
  );
};

export default HousesChart;
