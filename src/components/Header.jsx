import React from 'react'
import '../styles/Header.css'
import html2pdf from 'html2pdf.js';

const Header = () => {

  const handleDownload = () => {
    const resume = document.querySelector('.preview-container');
    if (!resume) {
      console.error("Resume element not found!");
      return;
    }

    const opt = {
      filename:     'Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resume).save();
  };

  return (
    <div className="header-container">
      <h1>Resume Builder</h1>
      <button type='button' className="download-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default Header;