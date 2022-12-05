const {ProductInCartServices} = require('../services');

const createProductInCart = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await ProductInCartServices.addProductInCart(data);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: ""
        })
    }
}

module.exports = {
    createProductInCart,
};