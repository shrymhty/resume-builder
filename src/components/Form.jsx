import '../styles/Form.css';

const Form = ({ formData, setFormData }) => {

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          company:'',
          role: '',
          startDate: '',
          endDate: '',
          isCurrent: false,
          description: ''
        }
      ]
    }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          projectName: '',
          projectDate: '',
          projectDescription: ''
        }
      ]
    }))
  }

  const addCerificate = () => {
    setFormData(prev => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          certName: '',
          certDescription: ''
        }
      ]
    }));
  };

  const removeExperience = (indexToFilter) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, index) => index !== indexToFilter)
    }));
  };

  const removeProject = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, index) => index !== indexToRemove)
    }))
  }

  const removeCertificate = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      certificates: prev.certificates.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpChange = (index, field, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][field] = value;
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  const handleProjChange = (index, field, value) => {
    const updatesProjects = [...formData.projects];
    updatesProjects[index][field] = value;
    setFormData(prev => ({
      ...prev,
      projects: updatesProjects
    }));
  };

  const handleCertChange = (index, field, value) => {
    const updatesCerts = [...formData.certificates];
    updatesCerts[index][field] = value;
    setFormData(prev => ({
      ...prev, 
      certificates: updatesCerts
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
        <h4>Skills and Technologies</h4>
        <hr />
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
        <h4>Exprience Details</h4>
        <hr />
        <button type='button' onClick={addExperience} id='add-exp-btn'>Add Experience</button>
        {formData.experiences.map((exp, index) => (
          <div className='experience-div' key={index}>
            <div className="experience-entry">
              <label htmlFor="company-name">Company/Organization Name</label>
              <input 
                type="text" 
                value={exp.company}
                name='company'
                id='company-name'
                onChange={(e) => handleExpChange(index, 'company', e.target.value)}
              />

              <label htmlFor="role-name">Position/Role</label>
              <input 
                type="text" 
                value={exp.role}
                name='role'
                id='role-name'
                onChange={(e) => handleExpChange(index, 'role', e.target.value)}
              />

              <label htmlFor="start-date">Start Date: </label>
              <input 
                type="month" 
                placeholder='mm/yyyy'
                id='start-date'
                name='startDate'
                value={exp.startDate}
                onChange={(e) => handleExpChange(index, 'startDate', e.target.value)}
              />

              {!exp.isCurrent && (
                <>
                  <label htmlFor="end-date">End Date: </label>
                  <input 
                    type="month" 
                    placeholder='mm/yyyy'
                    id='end-date'
                    name='endDate'
                    value={exp.endDate}
                    onChange={(e) => handleExpChange(index, 'endDate', e.target.value)}
                  />
                </>
              )}

              <label htmlFor="is-current">Currently working</label>
              <input 
                type="checkbox"
                id='is-current'
                name='isCurrent'
                value={exp.isCurrent}
                onChange={(e) => handleExpChange(index, 'isCurrent', e.target.value)} 
              />

              <label htmlFor="desc-text">Description/Tasks:</label>
              <textarea 
                name="description" 
                id="desc-text"
                value={exp.description}
                onChange={(e) => handleExpChange(index, 'description', e.target.value)}
              />
            </div>
            <button type='button' className='remove-experience' onClick={() => removeExperience(index)}>Remove Experience</button>
          </div>
        ))}
        <h4>Projects</h4>
        <hr />
        <button type='button' onClick={addProject} id='add-proj-btn'>Add Project</button>
        {formData.projects.map((proj, index) => (
          <div className="project-div">
            <div className="project-entry">
              <label htmlFor="project-name">Project Title:</label>
              <input 
                type="text"
                value={proj.projectName}
                name='projectName'
                id='project-name'
                onChange={(e) => handleProjChange(index, e.target.name, e.target.value)}
              />
              <label htmlFor="project-date">Project Date:</label>
              <input 
                type="month"
                placeholder='mm/yyyy'
                id='project-date'
                name='projectDate'
                onChange={(e) => handleProjChange(index, e.target.name, e.target.value)} 
              />
              <label htmlFor="project-desc">Description:</label>
              <textarea 
                name="projectDescription" 
                id="project-desc" 
                value={proj.projectDescription}
                onChange={(e) => handleProjChange(index, e.target.name, e.target.value)} 
              />
            </div>
            <button type='button' className='remove-project' onClick={() => removeProject(index)}>Delete Project</button>
          </div>
        ))}
        <h4>Certifications</h4>
        <hr />
        <button type='button' onClick={addCerificate} id='add-cert-btn'>Add Certificate</button>
        {formData.certificates.map((cert, index) => (
          <div className="certificate-div">
            <div className="certificate-entry">
              <label htmlFor="cert-name">Name of the Certificate:</label>
              <input 
                type="text" 
                name='certName'
                id='cert-name'
                value={cert.certName}
                onChange={(e) => handleCertChange(index, e.target.name, e.target.value)}
              />
              <label htmlFor="cert-desc">Description</label>
              <textarea 
                name="certDescription" 
                id="cert-desc"
                value={cert.certDescription}
                onChange={(e) => handleCertChange(index, e.target.name, e.target.value)}
              />
            </div>
            <button type='button' className='remove-cert' onClick={() => removeCertificate(index)}>Remove Certificate</button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;
