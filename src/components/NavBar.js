import { CartWidget } from "./CartWidget";

import {
  Navbar,
  Nav,  
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <Image src={"/logo.png"} />
          TiendaNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="/addProduct">Agregar Producto</Nav.Link>
            <Nav.Link href="/help">Ayuda</Nav.Link>
            <CartWidget />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-info">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
