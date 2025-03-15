import React from "react";
import '../assets/hero.css';
import pic from '../assets/good.jpeg';

export default function Hero(){
    return (
        <>
            <div className="hero">
                <div className="navbar">
                    <a>Home</a>
                    <a>Features</a>
                    <a>How We Work</a>
                    <a>Why Us?</a>
                    <a>Our Work</a>
                    <a>Contact Us</a>
                </div>
                <div className="contents">
                    <div className="box1">
                        <div className="heading">
                            <h2><span>Effortless</span> Social <br/> Media Growth</h2>
                        </div>
                        <div className="subheading">
                            <h4>We handle the research, create stunning videos, post to<br/>your social media, and track performance—so you can<br/> grow your online presence without lifting a finger.</h4>
                        </div>
                        <div className="buttons">
                            <button  className="cta1">Get 7 days of free trial</button>
                            <button className="cta2">Learn More</button>
                        </div>
                    </div>
                    <div className="box2">
                        <img src={pic}></img>
                    </div>
                </div>
            </div>
        </>
    )
}