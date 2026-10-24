import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-content">
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
                                    I'm a full-stack developer with nearly 4 years of experience building and maintaining
                                    enterprise web applications. I'm currently a Junior System Developer and Technical Support
                                    at Inland Corporation, where I've converted 5 of the company's legacy applications, which staff
                                    used to reach only through Remote Desktop, into web apps that are now in user testing.
                                </p>
                                <p>
                                    I've also worked on the company's SAP Business One upgrade and its move
                                    from on-premise servers to the AWS cloud. I have basic SAP B1 administration knowledge and
                                    an understanding of how in-house applications integrate with SAP.
                                </p>
                                <p>
                                    <strong>My core competencies include:</strong><br/>
                                    <strong>Frontend:</strong> React, AJAX, JavaScript, jQuery, HTML5, CSS3, Bootstrap<br/>
                                    <strong>Backend:</strong> ASP.NET Web Forms, ASP.NET MVC, C#, VB.NET, Entity Framework, ASP.NET Identity<br/>
                                    <strong>Databases & Reporting:</strong> SQL Server, MySQL, Oracle, Stored Procedures, SSRS, RDLC, Chart.js<br/>
                                    <strong>ERP & Cloud:</strong> SAP Business One (basic admin), AWS EC2, Azure Web Apps, Vercel, SSL setup<br/>
                                    <strong>CMS & APIs:</strong> WordPress, Google Maps API, EmailJS<br/>
                                    <strong>Tools:</strong> Visual Studio, VS Code, Git/GitHub, MySQL Workbench, cPanel, AI-assisted development
                                </p>
                                <p>
                                    I'm committed to continuous learning and staying current with emerging technologies and industry best practices.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="about-highlight">
                                <div className="highlight-item">
                                    <h4>Legacy to Web Modernization</h4>
                                    <p>Converted 5 of Inland Corporation's legacy applications from Remote Desktop access to browser-based web apps, now in user testing.</p>
                                </div>
                                <div className="highlight-item">
                                    <h4>SAP Business One & AWS</h4>
                                    <p>Took part in an SAP Business One version upgrade and a migration from on-premise servers to AWS. Attended SAP Connect Day at BGC twice and the AWS Kiro AI live demo.</p>
                                </div>
                                <div className="highlight-item">
                                    <h4>Enterprise Solutions</h4>
                                    <p>Built and maintained ASP.NET web applications, SSRS reports, and optimized stored procedures at Unitra Maritime.</p>
                                </div>
                                <div className="highlight-item">
                                    <h4>Technical Support</h4>
                                    <p>Troubleshoots live systems and resolves user issues quickly while keeping business applications running.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};
