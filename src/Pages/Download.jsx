import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { getAllDownloadResumeApi } from '../service/apiService';
import { resume } from 'react-dom/server';

function Download() {

  const [downloadList,setDownloadList]=useState([])

  useEffect(()=>{
    getAllDownloads()
  },[])

  const getAllDownloads=async()=>{
    const result=await getAllDownloadResumeApi()
    setDownloadList(result.data)
  }



  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='fs-1'>Downloaded Resume History</h1>
        <Link to={'/resume details'}><FaArrowLeft />Back</Link>
      </div>
      <div className='row g-4 my-5'>
        {/* Duplicate the row according to the resume count*/}
        {
          downloadList?.length>0?
          downloadList?.map(resume=>(
            <div className='col-lg-4'>
          <div style={{height:'350px'}} className='rounded shadow p-3 h-100'>
            <h6>Review at : {resume?.timestamp}</h6>
            <div className='mt-4 text-center'>
             <Link to={`/resume/${resume?.resumeId}`}> <img className='w-50' style={{height:"300px"}} src={resume?.resumeImg} alt="resume" /></Link>

            </div>

          </div>

        </div>
          ))



          :
          <div className='text-center'>No resumes downloaded yet!!!</div>
        }

      </div>
     
    </div>
  )
}

export default Download
