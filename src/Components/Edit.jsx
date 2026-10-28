import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from "react-icons/fa6";
import jobRole from '../assets/jobRoles.json'
import { toast } from 'react-toastify';
import { editAllResumeApi } from '../service/apiService';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({ resumedetails, SetResumeDetails }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = React.useRef()

  const removeSkill = (skill) => {
    SetResumeDetails({ ...resumedetails, skills: resumedetails.skills.filter(item => item != skill) })

  }

  const addSkill = (skill) => {
    if (skill) {
      if (resumedetails?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        toast.info("given skill is already available,please add another")
      } else {
        SetResumeDetails({ ...resumedetails, skills: [...resumedetails?.skills, skill] })
      }
      skillRef.current.value = ""
    } else {
      toast.warning("Please enter a valid input!!!")
    }
  }

   const handleEditResume = async () => {
      //make api call to update resume whenever the update button clicks
      const { fullname, location, job, phone, email, github, linkedin, degree, college, year, skills, summary } = resumedetails
  
      if (fullname && location && job && phone && email && github && linkedin && degree && college && year && skills.length > 0 && summary) {
        //make api call
        const response = await editAllResumeApi(resumedetails.id,resumedetails)
        // console.log(response);
        if (response.status == 200) {
          toast.success("Resume updated Successfully")
          setTimeout(() => {
            handleClose()
          }, 2500);
         
        }
  
      } else {
        toast.error("Please Fill The Form Completely!!!")
  
      }
  
    }

   




  return (
    <div>
      <Button style={{ color: 'red' }} className='btn' onClick={handleOpen}><FaUserEdit />Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>

            {/*Personal Details */}
            <div>
              <h1>Personal Details</h1>
              <div className='row p-3'>
                <TextField value={resumedetails?.fullname} onChange={e => SetResumeDetails({ ...resumedetails, fullname: e.target.value })} id='standard-basic-Fullname' label="Full Name" variant='standard' />
                <TextField value={resumedetails?.location} onChange={e => SetResumeDetails({ ...resumedetails, location: e.target.value })} id='standard-basic-Location' label="Location" variant='standard' />
                <FormControl variant='standard'>
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select defaultValue={resumedetails?.job} onChange={e => SetResumeDetails({ ...resumedetails, job: e.target.value })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    label="Job"

                  >

                    {
                      jobRole.jobRoles.map(job => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }




                  </Select>
                </FormControl>
              </div>


            </div>

            {/*Contact Details */}
            <div>
              <h1>Contact Details</h1>
              <div className='row p-3'>
                <TextField value={resumedetails?.email} onChange={e => SetResumeDetails({ ...resumedetails, email: e.target.value })} id='standard-basic-Email' label="Email" variant='standard' />
                <TextField value={resumedetails?.phone} onChange={e => SetResumeDetails({ ...resumedetails, phone: e.target.value })} id='standard-basic-Contact' label="Contact Number" variant='standard' />
                <TextField value={resumedetails?.linkedin} onChange={e => SetResumeDetails({ ...resumedetails, linkedin: e.target.value })} id='standard-basic-LinkedIn' label="LinkedIn Link" variant='standard' />
                <TextField value={resumedetails?.github} onChange={e => SetResumeDetails({ ...resumedetails, github: e.target.value })} id='standard-basic-Github' label="Github Link" variant='standard' />
              </div>
            </div>

            {/*Eductaional  Details */}
            <div>
              <h1>Educational Details</h1>
              <div className='row p-3'>
                <TextField value={resumedetails?.degree} onChange={e => SetResumeDetails({ ...resumedetails, degree: e.target.value })} id='standard-basic-degree' label="Bachlor's Degree" variant='standard' />
                <TextField value={resumedetails?.college} onChange={e => SetResumeDetails({ ...resumedetails, college: e.target.value })} id='standard-basic-college' label="University/College Name" variant='standard' />
                <TextField value={resumedetails?.year} onChange={e => SetResumeDetails({ ...resumedetails, year: e.target.value })} id='standard-basic-graduation' label="Year Of Graduation" variant='standard' />
              </div>
            </div>

            {/* Skills*/}
            <div>
              <h1>Skills</h1>
              <div className='d-flex'>
                <input ref={skillRef} type="text" placeholder='Add Skill' className='form-control' />
                <button onClick={() => { addSkill(skillRef.current.value) }} className='btn'>Add</button>
              </div>
              <h5>Added Skills :</h5>
              <div className='d-flex justify-content-between flex-wrap'>
                {
                  resumedetails?.skills?.map(skill => (
                    <Button onClick={() => { removeSkill(skill) }} key={skill} variant='contained' className='my-2'>{skill} <FaXmark className='ms-3' /></Button>
                  ))
                }
              </div>
            </div>
            {/*/Summary*/}
            <div>
              <h1>Summary</h1>
              <div className='row p-3'>
                <TextField value={resumedetails?.summary} onChange={e => SetResumeDetails({ ...resumedetails, summary: e.target.value })}
                  id='Summary' label='Summary' multiline variant='standard' ></TextField>
              </div>
            </div>
            {/*/ Update Button*/}
            <button onClick={handleEditResume} className='btn btn-primary mt-3'>Update CV</button>
          </Box>

        </Box>
      </Modal>

    </div>
  )
}

export default Edit
