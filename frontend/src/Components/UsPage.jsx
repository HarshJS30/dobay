import React from 'react';
import '../assets/us.css';
import img1 from '../assets/dreamerfinal.png';
import img2 from '../assets/costfinal.png';
import img3 from '../assets/resultsfinal.png';

export function Us(){
    return(
        <div className="us">
            <h1>Why Choose DoBay?</h1>
            <div className="boxes">
                <div className="boxx1">
                    <div className="imgg">
                        <img src={img1}></img>
                    </div>
                    <div className="text">
                        <h3>No Client Hassle</h3>
                        <p>We handle it all—research, creation, and posting—so you can focus on your business without the stress</p>
                    </div>
                </div>
                <div className="boxx2">
                    <div className="imgg">
                        <img src={img2}></img>
                    </div>
                    <div className="text">
                        <h3>Cost-Effective Solutions</h3>
                        <p>Premium content at a fraction of the cost, thanks to our AI tools and streamlined process.</p>
                    </div>
                </div>
                <div className="boxx3">
                    <div className="imgg">
                        <img src={img3}></img>
                    </div>
                    <div className="text">
                        <h3>Proven Results</h3>
                        <p>Data-driven optimization boosts your growth with measurable success every time.</p>
                    </div>
                </div>    
            </div>      
        </div>
    )
}