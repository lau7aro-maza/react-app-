import * as React from 'react';
import { Container, Nav, Navbar as NavBar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function Navbar() {
    return (

        <NavBar bg="light" expand="lg">
  <Container>
  <Link to='/' style={{ textDecoration: 'none' }}><h1>MyApp</h1></Link>
    <NavBar.Toggle aria-controls="basic-NavBar-nav" />
    <NavBar.Collapse id="basic-NavBar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <Link to='/category/indumentaria'>Indumentaria</Link>
          <br />
          <Link to='/category/zapatos'>Zapatos</Link>
          <br />
          <Link to='/category/accesories'>Accesorios</Link>
        </NavDropdown>
        <CartWidget/>
      </Nav>
    </NavBar.Collapse>
  </Container>
</NavBar>
)
  


};
