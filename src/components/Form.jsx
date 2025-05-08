import React, { useState } from 'react';
import '../styles/Form.css';

const Form = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1980;
  const startYears = [];
  const endYears = [];
  for (let year = currentYear; year >= startYear; year--) {
    startYears.push(year);
  }

  for (let year = currentYear; year <= currentYear+10; year++) {
    endYears.push(year);
  }

  return (
    <div className="form-container">
      <form>
        <h4>Personal Details</h4>
        <hr />
        <div className="name">
          <div className="input-group">
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last Name: </label>
            <input 
              type='text'
              id='last-name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="user-phone">Phone Number: </label>
        <input 
          type="tel"
          id='user-phone'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="user-email">Email: </label>
        <input 
          type='email'
          id='user-email'
          name='userEmail'
          value={formData.userEmail}
          onChange={handleChange}
        />
        <label htmlFor="user-linkedin">Linkedin URL: </label>
        <input 
          type="url"
          id='user-linkedin'
          name='userLinkedin'
          value={formData.userLinkedin}
          onChange={handleChange}
        />
        <h4>Education Details</h4>
        <hr />
        <label htmlFor="college-name">University Name: </label>
        <input 
          type="text" 
          name="collegeName" 
          id="college-name" 
          value={formData.collegeName} 
          onChange={handleChange} 
        />
        <div className="degree">
          <div className="input-group">
            <label htmlFor="degree-name">Degree: </label>
            <input 
              type="text" 
              name='degreeName'
              id='degree-name'
              value={formData.degreeName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="stream-name">Stream: </label>
            <input 
              type="text" 
              name='streamName'
              id='stream-name'
              value={formData.streamName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="college-dates">
          <div className="input-group">
            <label htmlFor="college-start">Start Year: </label>
            <select 
              id='college-start' 
              name='collegeStart'
              value={formData.collegeStart} 
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              {startYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="college-end">End Year: </label>
            <select 
              id='college-end' 
              name='collegeEnd'
              value={formData.collegeEnd} 
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              {endYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <h3>Exprience Details</h3>
        <hr />
      </form>
    </div>
  );
};

export default Form;
