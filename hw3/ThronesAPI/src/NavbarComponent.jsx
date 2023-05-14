import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="light">
      <Container style={{ justifyContent: "center" }}>
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/search">Search Characters</Nav.Link>
          <Nav.Link href="/houses">Houses Chart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
