const fastify = require('fastify')({logger: true});

const app = require("./app");

fastify.register(app);

fastify.listen({port: 3000}, (err)=>{
    if(err){
        console.log(err);
        process.exit();
    }
    console.log("server running at post 3000");
});