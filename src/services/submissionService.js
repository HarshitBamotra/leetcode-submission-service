const submissionProducer = require("../producers/submissionProducer");


class SubmissionService{
    constructor(submissionRepo){
        this.submissionRepo = submissionRepo;
    }

    async ping(){
        return "pong";
    }

    async addSubmission(submission){
        const submission = this.submissionRepo.createSubmission(submission);
        if(!submission){
            throw {message: "Not able to create submission"};
        }
        console.log(submission);
        const response = await submissionProducer(submission);
        return {queueResponse: response, submission};
    }
}

module.exports = SubmissionService;