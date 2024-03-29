import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ContactMe = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }
    
    const [formDetails, setformDetails] = useState(formInitialDetails);
    const [contactmeButtonText, setcontactmeButtonText] = useState('Send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setformDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <section className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Let's Connect</h1>
                        <span></span>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea type="text" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                </Col>
                                <Col>
                                    <button type="submit"><span>{contactmeButtonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}