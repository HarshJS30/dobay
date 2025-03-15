import React, { useState } from 'react';
import '../assets/form.css';

function ContactForm() {
  const [formData, setState] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    servicesInterested: '',
    videosPerDay: '',
    budget: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw4lMwlTMTLJyZqAB2RMiE1W2gzdeEllhKtAsFKD4GyRtrDuoAkL_sAYOLyuka9epmuaA/exec';
    
    
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });


    const url = new URL(scriptURL);
    const params = new URLSearchParams(formDataObj);
    url.search = params.toString();

    
    const script = document.createElement('script');
    script.src = url.toString();
    document.body.appendChild(script);
    
    
    window.handleFormResponse = function(response) {
      document.body.removeChild(script);
      setIsSubmitting(false);
      
      if (response.result === "success") {
        setSubmitMessage('Form submitted successfully!');
        // Clear the form
        setState({
          fullName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          servicesInterested: '',
          videosPerDay: '',
          budget: '',
          projectDetails: ''
        });
      } else {
        setSubmitMessage('Error submitting form. Please try again.');
      }
    };

    
    script.onerror = function() {
      document.body.removeChild(script);
      setIsSubmitting(false);
      setSubmitMessage('Error connecting to server. Please try again later.');
    };
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      {submitMessage && <div className={submitMessage.includes('success') ? 'success-message' : 'error-message'}>{submitMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Please enter your full name."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter the name of your company."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Provide your email so we can get back to you."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Optional: Provide a contact number if you'd like a call back."
          />
        </div>

        <div className="form-group">
          <label htmlFor="servicesInterested">Services Interested In:</label>
          <select
            id="servicesInterested"
            name="servicesInterested"
            value={formData.servicesInterested}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Daily AI-Powered Video Creation">Daily AI-Powered Video Creation</option>
            <option value="Content Strategy Consultation">Content Strategy Consultation</option>
            <option value="Custom Video Package">Custom Video Package</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="videosPerDay">Desired Videos per Day:</label>
          <input
            type="number"
            id="videosPerDay"
            name="videosPerDay"
            value={formData.videosPerDay}
            onChange={handleChange}
            placeholder="Optional: Let us know how many videos you need per day (e.g., 1, 5, 10)."
            min="1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget:</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Please specify your budget or select a range that fits your project."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDetails">Project Details / Additional Requirements:</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Share any additional details or specific requirements for your project."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;