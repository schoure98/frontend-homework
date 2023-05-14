import React from "react";
import NavbarComponent from "./NavbarComponent";

const Homepage = () => {
  return (
    <div>
      <NavbarComponent />
      <div style={{ textAlign: "center" }}>
        <h1 className="my-3">Thrones API</h1>
        <p>
          This is a front-end course asssignment to explore API and developing
          react project.
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>Search Parameters: Search for characters in Game of Thrones</li>
          <li>
            Houses Chart: Navigate to see the doghnut chart of houses in Game of
            Thrones
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
