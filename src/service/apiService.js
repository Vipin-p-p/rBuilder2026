import axiosService from "../api/axiosService";

// save resume API :called by ResumeInput component when finish button clicks

export const saveResumeApi = async (resumedetails) => {
    return await axiosService("POST", "/resumes", resumedetails)
}

//view resume Api:called by view component when the page loads in browser

export const viewResumeApi = async (resumeId) => {
    return await axiosService("GET", `/resumes/${resumeId}`, {})
}