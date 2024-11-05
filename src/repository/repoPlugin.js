const fp = require("fastify-plugin");
const SubmissionRepo = require("./submissionRepo");

async function repoPlugin(fastify, options){
    fastify.decorate("submissionRepo", new SubmissionRepo());
}

module.exports = fp(repoPlugin);