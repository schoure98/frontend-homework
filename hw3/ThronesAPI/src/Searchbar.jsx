import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Searchbar = ({ characters, setSearchResults }) => {
  const [searchCharacter, setSearchCharacter] = useState("");

  const handleSearch = () => {
    const matchedCharacters = characters.filter((character) =>
      character.fullName.toLowerCase().includes(searchCharacter.toLowerCase())
    );
    setSearchResults(matchedCharacters);
  };
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col style={{ justifyContent: "center" }}>
            <Form className="my-5 d-flex">
              <Form.Control
                className="me-2"
                type="search"
                placeholder="search for character"
                value={searchCharacter}
                onChange={(e) => setSearchCharacter(e.target.value)}
              />
              <Button onClick={handleSearch}>Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Searchbar;
