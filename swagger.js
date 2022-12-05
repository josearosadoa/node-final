const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Store online",
            version: "1.0.0",
            description: "API para realizar compras en linea"
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/routes/products.routes.js",
        "./src/routes/order.routes.js",
        "./src/models/productInCart.routes.js",
        "./src/routes/cart.routes.js",
        "./src/models/users.models.js",
        "./src/models/productInCart.models.js",
       
    ],

};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec ));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Documentacion disponible en http://localhost:${port}/api/v1/docs`);

}

module.exports = swaggerDocs;