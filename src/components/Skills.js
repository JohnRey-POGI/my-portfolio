import { Col, Row, Container } from "react-bootstrap";
import skills from "../data/skills.json"
import { getImageUrl } from "../utils";


export const Skills = () => {
    return (
        <section className="skills">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        {/* <Col xl={12}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
                        </Col>
                        <Col xl={12}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
                        </Col> */}
                        <Col className="skillsCont justify-content-around" xl={12}>
                            {skills.map((skill, id) => {
                                return <div className="skillCont">
                                    <div><img src={getImageUrl(skill.imagesource)} alt={skill.title}></img></div>
                                    <p>{skill.title}</p>
                                </div>
                            })}
                        </Col>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}