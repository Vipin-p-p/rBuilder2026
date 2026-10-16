import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div>
     <div className='w-100'>
      <h1>Full Name</h1>
      <p className='fs-5 lh-1'>Phone:</p>
      <p className='fs-5 lh-1'>Email:</p>
      <p className='fs-5 lh-1'>LinkedIN:</p>
      <p className='fs-5 lh-1'>Github:</p>
      <p className='fs-5 lh-1'>Location:</p>
      <Divider className='bg-dark'/>
      <h2>Professional Summary</h2>
      <p>Summary</p>
            <Divider className='bg-dark'/>
            <h2>Technical Skills</h2>
           <span> <Button variant='text' className='bg-dark text-light rounded'>Skill</Button></span>
           <p>Bchelor's Degree In:</p>
           <p>University/College Name:</p>
           <p>Year Of Graduation:</p>

     </div>
    </div>
  )
}

export default Preview
