const fastifyPlugin = require("fastify-plugin");

/**
 * 
 * @param {Fastify Object} fastify 
 * @param {*} options 
 */
async function app(fastify, options){
    fastify.register(require("@fastify/cors"));

    fastify.register(require("./routes/test.route"), {prefix:"/api"});

}

module.exports = fastifyPlugin(app);