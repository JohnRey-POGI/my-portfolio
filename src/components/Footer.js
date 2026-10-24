import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import linkedinIcon from '../assets/img/linkedin-icon.svg';
import gitIcon from '../assets/img/git-icon.svg';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <Container>
                <Row>
                    <Col md={4} sm={6} xs={12} className="footer-section">
                        <h5>About</h5>
                        <p>
                            A full-stack developer and junior system developer modernizing legacy business 
                            applications into web apps, with hands-on SAP Business One and AWS experience.
                        </p>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="footer-section">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="footer-section">

                        <h5>Connect With Me</h5>
                        <div className="social-icons-footer">
                            <a href="https://www.linkedin.com/in/john-rey-sta-ana-142199350/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn"></img></a>
                            <a href="https://github.com/JohnRey-POGI" target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="GitHub"></img></a>
                        </div>
                        <p>Email: <a href="mailto:johnreystaana@gmail.com">johnreystaana@gmail.com</a></p>
                        <p>Phone: <a href="tel:+639692975513">+63 969 297 5513</a></p>
                        <p>Location: Cavite, Philippines</p>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col xs={12} className="text-center">
                        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
