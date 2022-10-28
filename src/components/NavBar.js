import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

function NavBar({startGame, saveGame}) {
    
    function onClickNewGame() {
        console.log("Start new game")
        startGame(true)
    }

    function onSaveGame() {
        saveGame()
    }
    

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#newgame" onClick={onClickNewGame}>New Game</Nav.Link>
                        <Nav.Link href="#loadgame" >Load Game</Nav.Link>
                        <Nav.Link href="#savegame" onClick={onSaveGame}>Save Game</Nav.Link>
                        <Nav.Link href="#option">Options</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar