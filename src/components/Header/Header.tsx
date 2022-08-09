import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar bg="success" variant="light">
        <Container fluid>
          <Navbar.Brand className="h1" href="/"><img src={"https://res.cloudinary.com/kxnxchukwu/image/upload/v1659983816/CoolPlanet_FinalMark_y0ryxm.png"} width="180px" height="40px" /></Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/">
                Home
            </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}