import { useState, useEffect, useRef } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons"
import howm from '../assets/img/project/Me.png'
import './Home.css';

const TEXT_CHANGING = ["my name is John", "I'm Full Stack Developer", "I'm Technical Support Specialist", "I'm Game Developer"];

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
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my WORLD</span>
                        <h1>{`Hi `}<span className="wrap">{text}</span></h1>
                        <p>I'm a passionate developer with expertise in building modern web applications. I specialize in creating responsive designs and robust backend solutions. Let's build something amazing together!</p>
                        <Col className="d-flex">
                            <button id="btnseemore" onClick={handleSeeMore}>See My Work&nbsp;<ArrowRightCircle size={25}></ArrowRightCircle></button>
                            &nbsp;
                            <button id="btnletsconnect" onClick={handleLetsConnect}>Get In Touch&nbsp;<ArrowRightCircle size={25}></ArrowRightCircle></button>
                        </Col>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="image-container">
                            <Image src={howm}></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}