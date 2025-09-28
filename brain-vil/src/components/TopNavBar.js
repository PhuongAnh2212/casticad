"use client";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";


export default function TopNavbar() {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="/">CASTICaD</Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navbar" />
    <Navbar.Collapse id="main-navbar">
    <Nav className="ms-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/paper.pdf" target="_blank" rel="noopener noreferrer">Paper</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}