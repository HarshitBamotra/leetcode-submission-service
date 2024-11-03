const pingRequest = require("../controllers/test.controller");

async function testRoute(fastify, options){
    fastify.get("/ping", pingRequest);
}

module.exports = testRoute;