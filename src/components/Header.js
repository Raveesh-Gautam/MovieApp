import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../store/auth-context";

function Header() {
  const { close, setClose, cart, noCart, setNoCart } = useContext(AppContext);
  const location = useLocation();
  const navigate=useNavigate();
  useEffect(() => {
    const hideCartRoutes = ["/about", "/home"];
    setNoCart(hideCartRoutes.includes(location.pathname));
  }, [location.pathname, setNoCart]);

  const handleCart = () => {
    setClose(true);
  };
  const handleLogin=()=>{
    navigate('/AuthForm')
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-93uQwvBG0C8_WD6HtONEwK9Zj9MwIfQ`,{
      method:'POST',
      body:JSON.stringify({

      })
    })
  }
  return (
    <Navbar expand="lg" className="bg-dark shadow-sm p-stickey">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-primary">
          MyShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light fw-bold border-bottom border-light"
                  : "nav-link text-light"
              }
            >
              Home
            </NavLink>
             <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light fw-bold border-bottom border-light"
                  : "nav-link text-light"
              }
            >
              Store
            </NavLink>
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
             onClick={handleLogin}
            >
              Login
            </Navbar.Brand>
        {!noCart && (
          <Navbar.Brand>

            <Navbar.Brand
              className="border border-danger rounded px-3 py-1 text-light fw-semibold"
              onClick={handleCart}
            >
              Cart
            </Navbar.Brand>

            <Navbar.Brand>
              <span className="badge bg-success">{cart.length}</span>
            </Navbar.Brand>
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
