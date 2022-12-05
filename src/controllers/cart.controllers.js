const { CartServices } = require("../services");



const getProductByUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await CartServices.getProducts(id);
        res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: ""
        })
}

};

module.exports = {
    getProductByUser,
}