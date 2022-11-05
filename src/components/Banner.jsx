import React, { useEffect, useState } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';
import headerImg from "../assets/img/header-img.svg"
import colorSharp from "../assets/img/color-sharp.png"

const Banner = () => {
    const [loopNum, setLoopNum] =useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "Cloud"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()* 100)
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(()=>{
tick()
        },delta)
        return ()=> {clearInterval(ticker)}
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length +1)
        setText(updatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portafolio</span>
                        <h1>{`Hi I'm Hector Ramirez`} <span className='wrap'>{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque?</p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    );
};

export default Banner;