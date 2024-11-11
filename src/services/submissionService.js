const fetchProblemDetails = require("../apis/problemApi");
const submissionProducer = require("../producers/submissionProducer");


class SubmissionService{
    constructor(submissionRepo){
        this.submissionRepo = submissionRepo;
    }

    async ping(){
        return "pong";
    }

    async addSubmission(submissionPayload){

        console.log(submissionPayload);
        const problemId = submissionPayload.problemId;

        const problemApiResponse = await fetchProblemDetails(problemId);

        if(!problemApiResponse){
            throw {message: "Something went wrong"};
        }

        const codeLanguageStub = problemApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        // console.log(codeLanguageStub);
        codeLanguageStub.userSnippet = submissionPayload.code;
        submissionPayload.code = codeLanguageStub.startSnippet +"\n\n"+ codeLanguageStub.userSnippet + "\n\n" + codeLanguageStub.endSnippet;

        console.log(submissionPayload);
        const submission = await this.submissionRepo.createSubmission(submissionPayload);
        if(!submission){
            throw {message: "Not able to create submission"};
        }
        console.log(submission);
        const response = await submissionProducer({
            [submission._id]:{
                code: submission.code,
                language: submission.language,
                inputCase: problemApiResponse.data.testCases[0].input,
                outputCase: problemApiResponse.data.testCases[0].output
            }
        });
        return {queueResponse: response, submission};
        // return true;
    }
}

module.exports = SubmissionService;