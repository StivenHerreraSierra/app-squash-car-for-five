const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    try{
        const token = req.headers.Authorization;        
        const decode = jwt.verify(token, "Secreta");
        req.usuario = decode;
        next();
    } catch(error){
        res.status(401);
        res.json({code: 4, msg: "Usuario no autorizado"});
    }

}

module.exports = auth;