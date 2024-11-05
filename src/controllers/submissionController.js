function pingRequest(req, res){
    return res.send({
        msg: "Hello"
    });
};

async function createSubmission(req, res){
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).json({
        error:{},
        data: response,
        success: true,
        message: "Created Submission Successfully"
    });
}

module.exports = {
    pingRequest: pingRequest,
    createSubmission: createSubmission
};