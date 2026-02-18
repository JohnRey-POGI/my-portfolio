import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12}>
                        <h2>About Me</h2>
                    </Col>
                </Row>
                <Row className="align-items-center mt-4">
                    <Col md={6}>
                        <div className="about-content">
                            <p>
                                I'm a versatile developer with expertise across multiple platforms and technologies. 
                                My portfolio showcases projects ranging from game development to enterprise web applications 
                                and content management systems. I combine technical proficiency with creative problem-solving 
                                to deliver innovative solutions.
                            </p>
                            <p>
                                <strong>My core competencies include:</strong><br/>
                                <strong>Web Development:</strong> VB.NET, ASP.NET, JavaScript, jQuery, Bootstrap, CSS3, HTML5, React<br/>
                                <strong>Game Development:</strong> Unity, C#<br/>
                                <strong>Backend & Databases:</strong> MySQL, Stored Procedures, RDLC Reports<br/>
                                <strong>Cloud Services:</strong> Microsoft Azure<br/>
                                <strong>Design & Multimedia:</strong> Photoshop, Blender, Filmora, WordPress<br/>
                                <strong>Development Tools:</strong> Visual Studio, MySQL Workbench, PyCharm, Android Studio, NetBeans, XAMPP
                            </p>
                            <p>
                                I'm committed to continuous learning and staying current with emerging technologies and industry best practices.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about-highlight">
                            <div className="highlight-item">
                                <h4>Game Development</h4>
                                <p>Created a Unity-based unlockables game using C# with engaging gameplay mechanics and progression systems.</p>
                            </div>
                            <div className="highlight-item">
                                <h4>Enterprise Solutions</h4>
                                <p>Developed comprehensive Information System web app with report generation, contract management, and document handling using Azure.</p>
                            </div>
                            <div className="highlight-item">
                                <h4>Full-Stack Development</h4>
                                <p>Proficient in both frontend technologies (React, jQuery, Bootstrap) and backend systems (ASP.NET, MySQL, Stored Procedures).</p>
                            </div>
                            <div className="highlight-item">
                                <h4>Creative & Technical</h4>
                                <p>Skilled in design tools (Photoshop, Blender, Filmora) and CMS platforms, combining aesthetics with functionality.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
