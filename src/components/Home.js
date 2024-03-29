import { useState, useEffect } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons"
import howm from '../assets/img/twice-group.png'

export const Home = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const textChanging = ["Full Stack Developer", "Database Administrator", "Web Designer"];
    const [text, setText] = useState('') //displaying by letter
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; //type duration per word

    const tick = () => {
        let i = loopNum % textChanging.length;
        let fullText = textChanging[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    }
    useEffect (() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)}
    }, [text])

    const imgstyle = {
        height: "300px"
    }
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
                        <h1>{`Hi i'm `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Col className="d-flex">
                            <button id="btnseemore" onClick={() => { console.log('connect')}}>See More <ArrowRightCircle size={25}></ArrowRightCircle></button>
                            &nbsp;
                            <button id="btnletsconnect" onClick={() => { console.log('connect')}}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                        </Col>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Image src={howm} style={imgstyle} roundedCircle></Image>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}