import axiosService from "../api/axiosService";

// save resume API :called by ResumeInput component when finish button clicks

export const saveResumeApi = async (resumedetails) => {
    return await axiosService("POST", "/resumes", resumedetails)
}

//view resume API:called by view component when the page loads in browser

export const viewResumeApi = async (resumeId) => {
    return await axiosService("GET", `/resumes/${resumeId}`, {})
}


//view resume API:called by saved component when the page loads in browser

export const getAllResumeApi = async () => {
    return await axiosService("GET", `/resumes/`, {})
}

//remove resumes API:called by saved component when the delete button clicks

export const deleteAllResumeApi = async (resumeId) => {
    return await axiosService("DELETE", `/resumes/${resumeId}`, {})
}

//update resumes API:called by edit component when the update button clicks

export const editAllResumeApi = async (resumeId,resumedetails) => {
    return await axiosService("PUT", `/resumes/${resumeId}`,resumedetails)
}

//Download resumes API:called by edit component when the download button clicks

export const downloadResumeApi = async (resumedetails) => {
    return await axiosService("POST",`/downloads/`,resumedetails)
}


// get Download resumes API:called by edit component when the download button clicks

export const getAllDownloadResumeApi = async () => {
    return await axiosService("GET",`/downloads/`,{})
}

