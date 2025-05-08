import React from 'react'
import '../styles/ResumeBuilder.css'
import { useState } from 'react'
import Form from './Form'
import Preview from './Preview'

export const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userEmail: '',
        userLinkedin: '',
        phoneNumber: '',
        collegeName: '',
        degreeName:'',
        streamName: '',
        collegeStart: '',
        collegeEnd: '',
    })
    return (
        <div className="resume-body">
            <Form formData={formData} setFormData={setFormData} />
            <Preview formData={formData} />
        </div>
    )
}
