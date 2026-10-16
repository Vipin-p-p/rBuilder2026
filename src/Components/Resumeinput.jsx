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


const steps = ['Basic Infromations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function Resumeinput() {
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
            <TextField id='standard-basic-Fullname' label="Full Name" variant='standard' />
            <TextField id='standard-basic-Location' label="Location" variant='standard' />
            <FormControl variant='standard'>
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="Job"

              >
                <MenuItem value={"Job"}>Job</MenuItem>

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
            <TextField id='standard-basic-Email' label="Email" variant='standard' />
            <TextField id='standard-basic-Contact' label="Contact Number" variant='standard' />
            <TextField id='standard-basic-LinkedIn' label="LinkedIn Link" variant='standard' />
            <TextField id='standard-basic-Github' label="Github Link" variant='standard' />
          </div>
        </div>
      )
        break;
      case 2: return (
        <div>
          <h1>Educational Details</h1>
          <div className='row p-3'>
            <TextField id='standard-basic-degree' label="Bachlor's Degree" variant='standard' />
            <TextField id='standard-basic-college' label="University/College Name" variant='standard' />
            <TextField id='standard-basic-graduation' label="Year Of Graduation" variant='standard' />
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
            <Button >Finish</Button>
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
              <Button>GENERATE AI SKILLS & SUMMARY</Button>
              : <Button onClick={handleNext}>NEXT</Button>}

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Resumeinput
