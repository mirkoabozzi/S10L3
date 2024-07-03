import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../data/netflix_logo.png";
import kids from "../data/kids_icon.png";
import { NavLink, useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="NetflixLogo" width={"100px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tv-shows" className="nav-link">
              TvShow
            </NavLink>
            <NavLink to="#movies" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="#recently" className="nav-link">
              Recently Added
            </NavLink>
            <NavLink to="#list" className="nav-link">
              My List
            </NavLink>
          </Nav>
          <Nav className="align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search mx-2" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <Nav.Link href="#kids">Kids</Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="white" className="bi bi-bell-fill mx-2" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
            <img src={kids} alt="NetflixLogo" width={"30x"} height={"30px"} className="mx-2" />
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavLink to="/my-settings" className="nav-link">
                Settings
              </NavLink>
              <NavDropdown.Item href="#action/3.3">Exit</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
