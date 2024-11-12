const {Worker} = require("bullmq");
const axios = require("axios");
const redisConnection = require("../config/redisConfig")


async function evaluationWorker(queue){
    new Worker(queue, async job=>{
        
        if(job.name === "EvaluationJob"){
            try {
                const response = await axios.post("http://localhost:3004/sendPayload", {
                    userId: job.data.userId,
                    payload: job.data
                })
                
            } catch (error) {
                console.log(error);
            }
            console.log(response);

        }
    }, {
        connection: redisConnection
    });

}


module.exports = evaluationWorker;