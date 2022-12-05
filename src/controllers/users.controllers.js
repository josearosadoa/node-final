const {UserServices }= require('../services');
const welcomeTemplate = require('../template/welcome');
const transporter = require('../utils/mailer');

const userRegister = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(200).json(result);

        transporter.sendMail({
            from: '<jar.internacional24@gmail.com',
            to: result.email,
            subject: 'Correos de pruebas',
            text: `Hola ${result.username}   bienvenido a la major aplicacion que hayas visto`,
            html: welcomeTemplate(result.username),

        })

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message:"No se pudo crear mensaje"
        });
    }
};

module.exports = {
    userRegister,
}