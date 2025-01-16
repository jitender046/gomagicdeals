import React, { useState } from 'react';
import './All page.css'; // Make sure to import the CSS file

const ResumeMaker = () => {
    const [CandidateType, setCandidateType] = useState("Fresher");
    const [summaryType, setSummaryType] = useState('auto');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn:'',
    github:'',
    summary:'',
    languageandFrameworks:'',
    tolls:'',
    softskills:'',
    experience: '',
    projects:'',
    education: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSummaryTypeChange = (e) => {
    setSummaryType(e.target.value);
  };
  const handleCandidateTypeChange = (e) => {
    setCandidateType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add functionality to save the resume or download it as a PDF
    console.log('Resume Data:', formData);
  };

  return (
    <div className="resume-maker">
      <h1>Resume Maker</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-text">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>LinkedIn:</label>
          <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Github:</label>
          <input type="text" name="github" value={formData.github} onChange={handleChange} required />
        </div>
        </div>
        <h2>Professional Summary</h2>
        <div className='Radio-button'>
        <label>
            <input
              type="radio"
              value="auto"
              checked={summaryType === 'auto'}
              onChange={handleSummaryTypeChange}
            />
            Auto Generate
          </label>
          <label>
            <input
              type="radio"
              value="written"
              checked={summaryType === 'written'}
              onChange={handleSummaryTypeChange}
            />
            Written Ourselves
          </label>
        </div>

        {summaryType === 'auto' ? (
          <div className="form-group">
            <textarea name="summary" value={"To work in a reputed organization & carry out a challenging and dynamic with good amount of freedom & responsibility so that my share of knowledge is applied for growth of organization."} readOnly />
          </div>
        ) : (
          <div className="form-group">
            <textarea name="summary" value={formData.summary} onChange={handleChange} required />
          </div>
        )}
<h2>Technical Skills</h2>
<div className="input-text">
<div className="form-group">
<label>Language & Frameworks :</label>
<input/>
</div>
<div className="form-group">
    <label>Tolls :</label>
    <input />
</div>
<div className="form-group">
    <label>Soft skills :</label>
    <input/>
</div>
</div>
<div className='Radio-button'>
        <label>
            <input
              type="radio"
              value="Fresher"
              checked={CandidateType === 'Fresher'}
              onChange={handleCandidateTypeChange}
            />
            Fresher
          </label>
          <label>
            <input
              type="radio"
              value="Experience"
              checked={CandidateType === 'Experience'}
              onChange={handleCandidateTypeChange}
            />
            Experience
          </label>
        </div>

        {CandidateType === 'Fresher' ? (
          <div className="form-group">
            {/* <textarea name="CandidateType" value={"To work in a reputed organization & carry out a challenging and dynamic with good amount of freedom & responsibility so that my share of knowledge is applied for growth of organization."} readOnly /> */}
          </div>
        ) : (
          <div className="form-group">
            <div className="input-text">
            <div className="form-group">
             <label>Company Name :</label>
             <input name="company" value={formData.company} onChange={handleChange} required/>
            </div>
            <div className="form-group">
             <label>Start/End Date :</label>
             <input name="date" value={formData.date} onChange={handleChange} required/>
            </div>
            </div>
            <textarea name="experience" value={formData.experience} onChange={handleChange} required />
            </div>
        )}
<h2>Projects</h2>
<h3>Project 1</h3>
<div className="form-group">
    <input id='project-name' placeholder='Projects Name' />
    <textarea placeholder='write a short story about your projects'/>
</div>
<h3>Project 2</h3>
<div className="form-group">
    <input id='project-name' placeholder='Projects Name' />
    <textarea placeholder='write a short story about your projects'/>
</div>
<h3>Other Projects </h3>
<div className="form-group">
    <input id='project-name' placeholder='Projects Name' />
    <input id='project-name' placeholder='Projects Name' />
    <input id='project-name' placeholder='Projects Name' />
    <input id='project-name' placeholder='Projects Name' />
    <input id='project-name' placeholder='Projects Name' />

</div>

        <div className="form-group">
          <label>Education:</label>
          <textarea name="education" value={formData.education} onChange={handleChange} required />
        </div>

        <button type="submit">Generate Resume</button>
      </form>

      <div className="resume-preview">
        <h2>Resume Preview</h2>
        <div className="resume-header">
          <h3 className='center'>{formData.name}</h3>
          <div className="personal-info">
          <p>Phone: {formData.phone}</p>
          <p>Email: {formData.email}</p>
          <p>LinkedIn:{formData.linkedIn}</p>
          <p>Github:{formData.github}</p>
          </div>
        </div>
        <div className="resume-section">
          <h4>Professional Summary</h4>
          <p>{formData.summary}</p>
        </div>
        <div className="resume-section">
          <h4>Education</h4>
          <p>{formData.education}</p>
        </div>
        <div className="resume-section">
          <h4>Experience</h4>
          <p>{formData.experience}</p>
        </div>
        <div className="resume-section">
          <h4>Skills</h4>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeMaker;