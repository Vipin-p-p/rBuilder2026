import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRoles.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { resume } from 'react-dom/server';
import { toast } from 'react-toastify';
import { saveResumeApi } from '../service/apiService';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Infromations', 'Contact Details', 'Educational Details', 'Review & Submit'];



function Resumeinput({ resumedetails, SetResumeDetails }) {

  const navigate = useNavigate()


  console.log(resumedetails);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormCount = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h1>Personal Details</h1>
          <div className='row p-3'>
            <TextField value={resumedetails.fullname} onChange={e => SetResumeDetails({ ...resumedetails, fullname: e.target.value })} id='standard-basic-Fullname' label="Full Name" variant='standard' />
            <TextField value={resumedetails.location} onChange={e => SetResumeDetails({ ...resumedetails, location: e.target.value })} id='standard-basic-Location' label="Location" variant='standard' />
            <FormControl variant='standard'>
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select defaultValue={""} onChange={e => SetResumeDetails({ ...resumedetails, job: e.target.value })}
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
      )
        break;
      case 1: return (
        <div>
          <h1>Contact Details</h1>
          <div className='row p-3'>
            <TextField value={resumedetails.email} onChange={e => SetResumeDetails({ ...resumedetails, email: e.target.value })} id='standard-basic-Email' label="Email" variant='standard' />
            <TextField value={resumedetails.phone} onChange={e => SetResumeDetails({ ...resumedetails, phone: e.target.value })} id='standard-basic-Contact' label="Contact Number" variant='standard' />
            <TextField value={resumedetails.linkedin} onChange={e => SetResumeDetails({ ...resumedetails, linkedin: e.target.value })} id='standard-basic-LinkedIn' label="LinkedIn Link" variant='standard' />
            <TextField value={resumedetails.github} onChange={e => SetResumeDetails({ ...resumedetails, github: e.target.value })} id='standard-basic-Github' label="Github Link" variant='standard' />
          </div>
        </div>
      )
        break;
      case 2: return (
        <div>
          <h1>Educational Details</h1>
          <div className='row p-3'>
            <TextField value={resumedetails.degree} onChange={e => SetResumeDetails({ ...resumedetails, degree: e.target.value })} id='standard-basic-degree' label="Bachlor's Degree" variant='standard' />
            <TextField value={resumedetails.college} onChange={e => SetResumeDetails({ ...resumedetails, college: e.target.value })} id='standard-basic-college' label="University/College Name" variant='standard' />
            <TextField value={resumedetails.year} onChange={e => SetResumeDetails({ ...resumedetails, year: e.target.value })} id='standard-basic-graduation' label="Year Of Graduation" variant='standard' />
          </div>
        </div>
      )
        break;
      case 3: return (
        <div>
          <p>Our Ai Will Generate Skills & Summary According To Your Job Role.Click The <b>Generate Ai Skills & Summary</b>Button To Proceed</p>

        </div>
      )
        break;

      default: null
        break;
    }
  }

  const generateSkillSummary = () => {
    SetResumeDetails({ ...resumedetails, skills: jobSkills[resumedetails.job], summary: summaries[resumedetails.job] })
    handleNext()
  }

  const handleSaveResume = async () => {
    //make api call to save resume whenever the finish button clicks
    const { fullname, location, job, phone, email, github, linkedin, degree, college, year, skills, summary } = resumedetails

    if (fullname && location && job && phone && email && github && linkedin && degree && college && year && skills.length > 0 && summary) {
      //make api call
      const response = await saveResumeApi(resumedetails)
      console.log(response);
      if (response.status == 201) {
        toast.success("Resume Added Successfully")
        const resumeId = response.data.id
        navigate(`/resume/${resumeId}`)
      }

    } else {
      toast.error("Please Fill The Form Completely!!!")

    }

  }



  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSaveResume}>Finish</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {/*render from according to the active step*/}
            {
              renderFormCount(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />


            {activeStep === steps.length - 1
              ?
              <Button onClick={generateSkillSummary}>GENERATE AI SKILLS & SUMMARY</Button>
              : <Button onClick={handleNext}>NEXT</Button>}

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Resumeinput
