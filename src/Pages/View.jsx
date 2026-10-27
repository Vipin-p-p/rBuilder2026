import React, { useEffect, useState } from 'react'
import { FaFileDownload, FaBackward } from "react-icons/fa";
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import Preview from '../Components/Preview';
import { viewResumeApi } from '../service/apiService';


function View() {

  const [resume, SetResume] = useState()


  const { id } = useParams()
  console.log(resume);

  useEffect(() => {
    getResumeDetails()
  }, [])




  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      SetResume(response.data)

    }
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/*Navigation icons*/}
          <div className='d-flex justify-content-center align-items-center'>

            {/*Download*/}
            <button style={{ color: 'red' }} className='btn'><FaFileDownload />Download CV</button>

            {/*Edit*/}
      
            <Edit resumedetails={resume} SetResumeDetails={SetResume}/>

            {/*All resumes*/}
            {/* <Link style={{ color: 'red' }} to={'/all resumes'} className='btn mx-2'><IoDocumentText />All Resumes</Link> */}

            {/*Download History*/}
            {/* <Link style={{ color: 'red' }} to={'/downloads'} className='btn mx-2'><IoMdRefresh />Download History</Link> */}

            {/*Back*/}
            <Link style={{ color: 'red' }} to={'/resume details'} className='btn mx-2'><FaBackward />Previous</Link>

          </div>

          <div className='p-5'>
            <Preview resumedetails={resume} />
          </div>

        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
