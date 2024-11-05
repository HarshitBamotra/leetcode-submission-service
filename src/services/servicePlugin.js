const fp = require("fastify-plugin");
const SubmissionService = require("./submissionService");

async function servicePlugin(fastify, options){
    fastify.decorate("submissionService", new SubmissionService(this.submissionRepo));
}

module.exports = fp(servicePlugin);