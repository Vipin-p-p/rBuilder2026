import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { deleteAllResumeApi, getAllResumeApi } from '../service/apiService';
import { FaSearch } from "react-icons/fa";

function Saved() {

  const [allResumes, setAllResumes] = useState([])
  const [searchKey, setSearchKey] = useState("")
  console.log(searchKey);


  console.log(allResumes);



  useEffect(() => {
    searchKey == "" ? getAllResumes() : searchCandidate()
  }, [searchKey])

  const searchCandidate = () => {
    setAllResumes(allResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase())))

  }


  const getAllResumes = async () => {
    const response = await getAllResumeApi()
    if (response.status === 200) {
      setAllResumes(response.data);

    }
  }
  const removeResume = async (id) => {
    if (confirm("Are you sure you want to delete this resume")) {
      const response = await deleteAllResumeApi(id)
      if (response.status === 200) {
        getAllResumes()

      }
    }

  }





  return (
    <div className='container d-flex justify-content-center align-items-center my-5 flex-column'>
      <h1>All Saved Resumes</h1>
      <div className='d-flex justify-content-center align-items-center w-50 mt-3'>
        <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search candidate by their job name' className='form-control' />
        <FaSearch style={{ marginLeft: "-30px" }} />
      </div>
      <table className='table table-hover table-stripped my-5'>
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allResumes?.length > 0 ?

              allResumes?.map((resume, index) => (
                <tr key={resume?.id}>
                  <td>{index + 1}</td>
                  <td><Link to={`/resume/${resume.id}`}>{resume?.fullname.toUpperCase()}</Link></td>
                  <td>{resume?.job.toUpperCase()}</td>
                  <td><button onClick={() => { removeResume(resume?.id) }} className='btn btn-danger'><FaTrash /></button></td>
                </tr>
              ))


              :
              <p>NO RESUMES ADDED YET</p>
          }
        </tbody>

      </table>
    </div>
  )
}

export default Saved
