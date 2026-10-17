import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='fs-1'>Downloaded Resume History</h1>
        <Link to={'/resume details'}><FaArrowLeft />Back</Link>
      </div>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count*/}
        <div className='col-lg-4'>
          <div style={{height:'350px'}} className='rounded shadow p-3'>
            <h6>Review at : Time Stamp</h6>
            <div className='mt-4 text-center'>
             <Link to={'/resume/:id'}> <img className='w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QFLjFl8ViThW3YEp_2EACOiOTm2NOUb91igVTV22qg&s=10" alt="resume" /></Link>

            </div>

          </div>

        </div>

      </div>
     
    </div>
  )
}

export default Download
