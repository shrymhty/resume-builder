import React from 'react'
import '../styles/Preview.css'

const Preview = ({ formData }) => {
  const getLinkedinUser = (url) => {
    if (!url) return '';
    const parts = url.split('/').filter(Boolean);
    return `linkedin.com/${parts.pop()}`;
  }

  const hasContactInfo = formData.phoneNumber || formData.userEmail || formData.userLinkedin;
  const hasEducationDetails = formData.collegeName || formData.streamName || formData.collegeStart || formData.collegeEnd ||formData.degreeName;

  return (
    <div className="preview-container">
      <div className="info">
        <h2>{formData.firstName} {formData.lastName}</h2>
        {hasContactInfo && (
          <div>
            <p>
              {formData.phoneNumber && `${formData.phoneNumber} | `}
              {formData.userEmail && `${formData.userEmail} | `}
              <a href={formData.userLinkedin} target='_blank' rel='noreferrer noopener'>{formData.userLinkedin && getLinkedinUser(formData.userLinkedin)}</a>
            </p>
          </div>
        )}
      </div>
      {hasEducationDetails && (
        <section class='education-section'>
          <h3>Education</h3>
          <hr></hr>
          <h5>{formData.collegeName && `${formData.collegeName}`}</h5>
          <p>{formData.degreeName && `${formData.degreeName}`} in {formData.streamName && `${formData.streamName}`}</p>
          <p><i>{formData.collegeStart && `${formData.collegeStart} - `}{formData.collegeEnd && `${formData.collegeEnd}`}</i></p>
        </section>
      )}
      
    </div>
  )
}

export default Preview