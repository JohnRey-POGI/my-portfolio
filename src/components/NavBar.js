import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navLogo from '../assets/img/Logo_of_TWICE.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50 ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}


    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={navLogo} alt="logo" className="navLogo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
              {/* nested dropdown */}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#home"><img src={navIcon1} alt=""></img></a>
                    <a href="#skills"><img src={navIcon2} alt=""></img></a>
                    <a href="#projects"><img src={navIcon3} alt=""></img></a>
                </div>
                <button className="vvd" onClick={() => console.log('connected')}>
                  <span>Let's Connect</span>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}