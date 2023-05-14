import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { Container, Card } from "react-bootstrap";
import axios from "axios";

const url = "https://thronesapi.com/api/v2/Characters";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(url);
        const apiData = response.data;
        setCharacters(apiData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <Searchbar characters={characters} setSearchResults={setSearchResults} />

      {searchResults.map((character, index) => (
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Card
            key={index}
            className="py-3 text-center"
            style={{ width: "24rem"}}
          >
            <Card.Body>
              <Card.Img
                className="py-3"
                variant="top"
                src={character.imageUrl}
                alt={character.fullName}
              />
              <Card.Title className="text-center">
                {character.fullName}
              </Card.Title>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default CharacterPage;
