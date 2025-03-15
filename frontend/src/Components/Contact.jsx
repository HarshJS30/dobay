import React from "react";
import '../assets/us.css';
import img1 from '../assets/contactt.png'
import { useNavigate } from 'react-router-dom';
export default function Contact(){
    const navigate = useNavigate();
    const googleCalendarUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3QZfGBxO3681zOjn1jk-tZhIPBuC4OLSRVmTS9HNwg8epg6i__sPUCqr96VKqMZzLhaMTHQLOk?gv=true';

    const handleRedirect = () => {
        window.location.href = googleCalendarUrl;
  };
    return(
        <div className="contacts" id="contact">
            <div className="contact">
                <div className="info">
                    <h1>Stay in the<span>Loop</span></h1>
                    <p>Try our services free for 7 days and experience the difference yourself!<br></br> Click the button below or email us with any questions.</p>
                    <div className="contactons">
                        <button className="free" onClick={()=>navigate('/ContactForm')}>Try Free for 7 days</button>
                        <button>Mail Us Here</button>
                    </div>
                    <button className="sch" onClick={handleRedirect}>Schedule a meet</button>
                </div>
                <img src={img1}></img>
            </div>
        </div>
    )
}