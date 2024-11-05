const { createSubmission, pingRequest } = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options){
    fastify.get("/", pingRequest);
    fastify.post("/", createSubmission);
}

module.exports = submissionRoutes;