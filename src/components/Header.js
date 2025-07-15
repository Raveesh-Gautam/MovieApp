import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppContext from "../store/auth-context";
import { NavLink } from "react-router-dom";

function Header() {
  const { close, setClose, cart } = useContext(AppContext);
  const handleCart = () => {
    setClose(true);
  };
  return (
    <Navbar expand="lg" className="bg-dark shadow-sm p-stickey">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          MyShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#Store" className="text-light">
              Store
            </Nav.Link>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light fw-bold border-bottom border-light"
                  : "nav-link text-light"
              }
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand
          className="border border-danger rounded px-3 py-1 text-light fw-semibold"
          onClick={handleCart}
        >
          Cart
        </Navbar.Brand>

        <Navbar.Brand>
          <span className="badge bg-success">{cart.length}</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
