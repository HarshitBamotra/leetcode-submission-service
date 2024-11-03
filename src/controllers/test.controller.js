function pingRequest(req, res){
    return res.send({
        msg: "Hello"
    });
};

module.exports = pingRequest;