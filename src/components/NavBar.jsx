import * as React from 'react';
import { Container, Nav, Navbar as NavBar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

export default function Navbar() {
    return (

        <NavBar bg="light" expand="lg">
  <Container>
    <NavBar.Brand href="#home">My-App</NavBar.Brand>
    <NavBar.Toggle aria-controls="basic-NavBar-nav" />
    <NavBar.Collapse id="basic-NavBar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <CartWidget/>
      </Nav>
    </NavBar.Collapse>
  </Container>
</NavBar>
)
  


};
