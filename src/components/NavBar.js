import { useState, useEffect, useRef } from "react";
import './NavBar.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import gitIcon from '../assets/img/git-icon.svg';
import facebookIcon from '../assets/img/facebook-icon.svg';
import instagramIcon from '../assets/img/instagram-icon.svg';
import navLogo from '../assets/img/Profile LOGO.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false); // Track mobile menu state
    const [isNavHidden, setIsNavHidden] = useState(false); // Track navbar visibility
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            const footerSection = document.getElementById('footer');
            
            // Set scrolled state for styling when scrolled past 50px
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Hide navbar when footer section becomes visible on device
            if (footerSection) {
                const footerPosition = footerSection.offsetTop;
                //const footerHeight = footerSection.offsetHeight;
                const windowHeight = window.innerHeight;
                
                // Hide navbar when footer is in viewport
                if (currentScrollY + windowHeight > footerPosition) {
                    setIsNavHidden(true);
                } else {
                    // Show navbar when footer is not in viewport
                    setIsNavHidden(false);
                }
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        setExpanded(false); // Close mobile menu when link is clicked
    }

    const handleContactClick = () => {
        setExpanded(false); // Close mobile menu
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    return (
      <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${isNavHidden ? "nav-hidden" : "nav-visible"}`} expanded={expanded} onToggle={(expanded) => setExpanded(expanded)}>
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
              <Nav.Link href="#about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/john-rey-sta-ana-142199350/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn"></img></a>
                    <a href="https://github.com/JohnRey-POGI" target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="GitHub"></img></a>
                    <a href="https://www.facebook.com/johnrey.staana.18" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook"></img></a>
                    <a href="https://www.instagram.com/johnrey_staana/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram"></img></a>
                </div>
                <button className="vvd" onClick={handleContactClick}>
                  <span>Let's Connect</span>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}