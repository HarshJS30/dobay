import React from "react";
import '../assets/us.css';
import img1 from '../assets/contactt.png'
export function Contact(){
    return(
        <div className="contacts">
            <div className="contact">
                <div className="info">
                    <h1>Stay in the<span>Loop</span></h1>
                    <p>Try our services free for 7 days and experience the difference yourself!<br></br> Click the button below or email us with any questions.</p>
                    <div className="contactons">
                        <button className="free">Try Free for 7 days</button>
                        <button>Mail Us Here</button>
                    </div>
                    <button className="sch">Schedule a meet</button>
                </div>
                <img src={img1}></img>
            </div>
        </div>
    )
}