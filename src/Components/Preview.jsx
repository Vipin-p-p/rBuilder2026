import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview({ resumedetails }) {
  return (
    <div>
      <div className='w-100'>
        <h1>{resumedetails?.fullname}</h1>
        <p className='fs-5 lh-1'>Phone:{resumedetails?.phone}</p>
        <p className='fs-5 lh-1'>Email:{resumedetails?.email}</p>
        <p className='fs-5 lh-1'>LinkedIN:{resumedetails?.linkedin}</p>
        <p className='fs-5 lh-1'>Github:{resumedetails?.github}</p>
        <p className='fs-5 lh-1'>Location:{resumedetails?.location}</p>
        <Divider className='bg-dark' />
        <h2>Professional Summary</h2>
        <p>{resumedetails?.summary}</p>
        <Divider className='bg-dark' />
        <h2>Technical Skills</h2>
        {/*duplicate according to skill number */}

        {
          resumedetails?.skills?.map(skill => (
            <span> <Button key={skill} variant='text' className='bg-dark text-light rounded my-2 mx-2'>{skill}</Button></span>

          ))
        }
        <p>Bchelor's Degree In:{resumedetails?.degree}</p>
        <p>University/College Name:{resumedetails?.college}</p>
        <p>Year Of Graduation:{resumedetails?.year}</p>

      </div>
    </div>
  )
}

export default Preview
