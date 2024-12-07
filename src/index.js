const host = (process.env.HOST === "RENDER") ? `0.0.0.0` : `127.0.0.1`;
const fastify = require('fastify')({logger: true});

const app = require("./app");
const connectToDB = require('./config/dbConfig');

const serverConfig = require("./config/serverConfig");
const evaluationWorker = require('./workers/evaluationWorker');

fastify.register(app);

fastify.listen({host: host, port: serverConfig.PORT}, async (err)=>{
    if(err){
        console.log(err);
        process.exit();
    }
    await connectToDB();
    evaluationWorker("EvaluationQueue");
    console.log(`server running at port ${serverConfig.PORT}`);
});