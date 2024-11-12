const submissionQueue = require("../queues/submissionQueue");

module.exports = async function submissionProducer(payload) {
    await submissionQueue.add("SubmissionJob", payload);
    // console.log(`New submission job added %o`, payload);
}
