const {AuthServices} = require('../services');



const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);

        if (result){
            const {email, username, id} = result.result;
            const user = {email, id, username};
            const token = AuthServices.getToken(user)
            user.token = token
            res.json({ ...user});
        }else {
            res.status(400).json({message: 'Informacion invalida'})
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Email o contrasena incorreta'

        });
        
    }
};

module.exports = {
    userLogin,
};