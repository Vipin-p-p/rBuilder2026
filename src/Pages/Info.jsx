import React from 'react'
import Resumeinput from '../Components/Resumeinput'
import Preview from '../Components/Preview'

function Info() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <Resumeinput/>
          </div>
          <div className="col-lg-6">
            <Preview/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
