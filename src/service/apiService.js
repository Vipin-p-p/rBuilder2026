import axiosService from "../api/axiosService";

// save resume API :called by ResumeInput component when finish button clicks

export const saveResumeApi = async (resumedetails) => {
    return await axiosService("POST", "/resumes", resumedetails)
}