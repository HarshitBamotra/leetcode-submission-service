const submissionProducer = require("../producers/submissionProducer");


class SubmissionService{
    constructor(submissionRepo){
        this.submissionRepo = submissionRepo;
    }

    async ping(){
        return "pong";
    }

    async addSubmission(submissionPayload){
        const submission = await this.submissionRepo.createSubmission(submissionPayload);
        if(!submission){
            throw {message: "Not able to create submission"};
        }
        console.log(submission);
        const response = await submissionProducer(submission);
        return {queueResponse: response, submission};
    }
}

module.exports = SubmissionService;