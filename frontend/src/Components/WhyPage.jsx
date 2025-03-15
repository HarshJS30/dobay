import React from "react";
import '../assets/why.css';
import img1 from '../assets/ideafinal.png';
import img2 from '../assets/reach.webp';
import img3 from '../assets/growthfinal.png';
export default function WhyPage(){
    return(
        <div className="working">  
            <h2>How It <span>Works?</span></h2>
            <div className="why">
                <div className="one1">
                    <img src={img1}></img>
                    <div className="content">
                        <p className="number">01</p>
                        <h3>Strategy & Creation</h3>
                        <p>We begin by researching your niche with AI insights to craft a tailored strategy. Then, using advanced tools and creativity, we produce stunning videos and reels without needing your input—delivering high-quality content that resonates with your audience.</p>
                    </div>
                </div>
                <div className="two2">
                    <img src={img2}></img>
                    <div className="content">
                        <p className="number">02</p>
                        <h3>Delivery & Consistency</h3>
                        <p>We schedule and post your content across social platforms with perfect timing, ensuring a consistent online presence. Our streamlined process handles everything, saving you time and effort while keeping your brand active.</p>
                    </div>
                </div>
                <div className="three3">
                    <img src={img3}></img>
                    <div className="content">
                        <p className="number">03</p>
                        <h3>Growth & Optimization</h3>
                        <p>We track performance metrics and refine our approach with data-driven insights, optimizing your content for maximum impact. This ongoing effort drives measurable growth, all with minimal oversight from you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}