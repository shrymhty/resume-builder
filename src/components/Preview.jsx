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
  const hasExperienceDetails = formData.experiences.length > 0;
  const hasProjectDetails = formData.projects.length > 0;
  const hasCertDetails = formData.certificates.length > 0;

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
      {hasExperienceDetails && (
        <section className="experience-section">
          <h3>Experience</h3>
          <hr />
          {formData.experiences.map((exp, index) => (
            <div key={index} className="experience-display">
              <h4>{exp.role}</h4>
              <h5>{exp.company}</h5>
              <p>
                <i>
                  {exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate}
                </i>
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}      
      {hasProjectDetails && (
        <section className="project-section">
          <h3>Projects</h3>
          <hr />
          {formData.projects.map((proj, index) => (
            <div key={index} className="project-display">
              <h4>{proj.projectName}</h4>
              <p>
                <i>
                  {proj.projectDate}
                </i>
              </p>
              <p>{proj.projectDescription}</p>
            </div>
          ))}
        </section>
      )}      
      {hasCertDetails && (
        <section className="cert-section">
          <h3>Certifications</h3>
          <hr />
          {formData.certificates.map((cert, index) => (
            <div key={index} className="certificate-display">
              <h4>{cert.certName}</h4>
              <p>{cert.certDescription}</p>
            </div>
          ))}
        </section>
      )}      
    </div>
  )
}

export default Preview