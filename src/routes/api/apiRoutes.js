async function apiRouter(fastify, options){
    const v1Plugin = require("./v1/v1Routes");
    fastify.register(v1Plugin, {prefix: "/v1"});
}

module.exports = apiRouter;