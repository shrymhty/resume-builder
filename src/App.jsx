import React from 'react'
import './App.css'
import Header from './components/Header'
import { ResumeBuilder } from './components/ResumeBuilder'


const App = () => {
  return (
    <>
      <Header />  
      <ResumeBuilder />    
    </>
  )
}

export default App