import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <h1>Resume Builder</h1>
      <button type='button' className="download-button">
          Download
      </button>
    </div>
  )
}

export default Header