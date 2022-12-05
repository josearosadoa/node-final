const {OrderServices} = require('../services');


const getOrderByUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await OrderServices.getOrders(id);
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
    getOrderByUser,
}