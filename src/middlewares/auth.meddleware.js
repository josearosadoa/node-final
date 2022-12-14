const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(bearToken){
        const token = bearerToken.split('Bearer ')[1];
        console.log(token);
        try {
            const decoded = jwt.verify(token,
                process.env.SECRET,
                'HS512');
                console.log(decoded)
        } catch (error) {
            next({
                status: 400,
                errorContent: error,
                message: "Invalid token"
            })
        }
    }
    next();
}

module.exports = authenticate;