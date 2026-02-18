import { Col, Row, Container } from "react-bootstrap";
import skills from "../data/skills.json"
import applications from "../data/applications.json"
import { getImageUrl } from "../utils";
import "./Skills.css";


export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container fluid>
                <h2>My Skills</h2>
                
                {/* Programming Languages Section */}
                <div className="skills-section">
                    <h3 className="skills-category-title">Programming Languages</h3>
                    <Row>
                        <Col xs={12}>
                            <div className="skills-slider skills-slider-left">
                                <div className="skills-track skills-track-left">
                                    {skills.map((skill, id) => {
                                        return <div key={id} className="skill-item">
                                            <div className="skill-icon"><img src={getImageUrl(skill.imagesource)} alt={skill.title}></img></div>
                                            <p>{skill.title}</p>
                                        </div>
                                    })}
                                    {skills.map((skill, id) => {
                                        return <div key={`duplicate-${id}`} className="skill-item">
                                            <div className="skill-icon"><img src={getImageUrl(skill.imagesource)} alt={skill.title}></img></div>
                                            <p>{skill.title}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Applications & Tools Section */}
                <div className="skills-section">
                    <h3 className="skills-category-title">Applications & Tools</h3>
                    <Row>
                        <Col xs={12}>
                            <div className="skills-slider skills-slider-right">
                                <div className="skills-track skills-track-right">
                                    {applications.map((app, id) => {
                                        return <div key={id} className="skill-item">
                                            <div className="skill-icon"><img src={getImageUrl(app.imagesource)} alt={app.title}></img></div>
                                            <p>{app.title}</p>
                                        </div>
                                    })}
                                    {applications.map((app, id) => {
                                        return <div key={`duplicate-${id}`} className="skill-item">
                                            <div className="skill-icon"><img src={getImageUrl(app.imagesource)} alt={app.title}></img></div>
                                            <p>{app.title}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}