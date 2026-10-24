import { useState, useEffect, useRef } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { ArrowRightCircle, Download } from "react-bootstrap-icons"
import howm from '../assets/img/project/Me.png'
import './Home.css';

const TEXT_CHANGING = ["Full-Stack .NET Developer", "Junior System Developer", "SAP B1 & AWS Migration", "Legacy-to-Web Modernization"];

export const Home = () => {
    const [text, setText] = useState('');
    const timeoutRef = useRef(null);
    const textRef = useRef('');
    const loopNumRef = useRef(0);
    const isDeletingRef = useRef(false);

    useEffect(() => {
        const tick = () => {
            let i = loopNumRef.current % TEXT_CHANGING.length;
            let fullText = TEXT_CHANGING[i];
            let currentText = textRef.current;
            let updatedText = isDeletingRef.current ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);

            textRef.current = updatedText;
            setText(updatedText);

            let delay;
            if (isDeletingRef.current) {
                delay = 50 + Math.random() * 50; // 50-100ms for deleting
            } else if (updatedText === fullText) {
                delay = 1000 + Math.random() * 1000; // 1-2s pause
            } else {
                delay = 100 + Math.random() * 100; // 100-200ms for typing
            }

            if (!isDeletingRef.current && updatedText === fullText) {
                isDeletingRef.current = true;
            } else if (isDeletingRef.current && updatedText === '') {
                isDeletingRef.current = false;
                loopNumRef.current = loopNumRef.current + 1;
            }

            timeoutRef.current = setTimeout(tick, delay);
        };

        tick();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Navigation handlers for the buttons
    const handleSeeMore = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    const handleLetsConnect = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    // const contstyle = {
    //     backgroundColor: "black !important",
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"

    // }
    return (
        <section className="banner" id="home">
            <div className="section-content">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Full-Stack Developer · Cavite, Philippines</span>
                            <h1>Hi, I'm John Rey</h1>
                            <h2 className="typing-role"><span className="wrap">{text}</span>&nbsp;</h2>
                            <p>I'm a full-stack developer with nearly 4 years of experience building enterprise web applications. I've converted 5 legacy desktop apps into web apps (now in user testing), and I've worked on SAP Business One and AWS cloud migrations. Let's build something amazing together!</p>
                            <Col className="d-flex flex-wrap gap-2">
                                <button id="btnseemore" onClick={handleSeeMore}>See My Work&nbsp;<ArrowRightCircle size={25}></ArrowRightCircle></button>
                                <button id="btnletsconnect" onClick={handleLetsConnect}>Get In Touch&nbsp;<ArrowRightCircle size={25}></ArrowRightCircle></button>
                                <a id="btnresume" href={`${process.env.PUBLIC_URL}/resume.pdf`} download="John Rey Sta. Ana - Resume.pdf">Download Resume&nbsp;<Download size={20}></Download></a>
                            </Col>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <div className="image-container">
                                <Image src={howm}></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )

}