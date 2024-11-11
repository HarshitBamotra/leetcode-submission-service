const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_SERVICE_URL } = require("../config/serverConfig");

async function fetchProblemDetails(problemId){
    try {
        const uri = `${PROBLEM_SERVICE_URL}/api/v1/problems/${problemId}`
        const response = await axiosInstance.get(uri);
        return response.data;
        
    } catch (error) {
        console.log("Something went wrong while fetching problems");
        console.log(error);
    }    
}

module.exports = fetchProblemDetails;