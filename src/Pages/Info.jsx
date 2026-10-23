import React from 'react'
import Resumeinput from '../Components/Resumeinput'
import Preview from '../Components/Preview'

function Info() {

   const [resumedetails, SetResumeDetails] = React.useState({
      fullname: "", location: "", job: "", phone: "", email: "", github: "", linkedin: "", degree: "", college: "", year: "", skills: [], summary: ""
    })

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <Resumeinput resumedetails={resumedetails} SetResumeDetails={SetResumeDetails}/>
          </div>
          <div className="col-lg-6">
           {resumedetails.fullname && <Preview resumedetails={resumedetails} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
