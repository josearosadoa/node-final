const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require ('./utils/database');
const handleError = require('./middlewares/error.middlewares');
const initModels = require('./models/initModels');
const {userRoutes, authRoutes, productRoutes, productInCartRoutes, cartRoutes, orderRoutes} = require('./routes');
const transporter = require('./utils/mailer'); 

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
.then(() => console.log('Autenticacion exitosa'))
.catch((error) => console.log(error));

db.sync({alter: false})
.then(() => console.log('Base de datos sincronizada'))
.catch((error) => console.log(error));

transporter.verify()
    .then(() => console.log("Estamos listos para enviar correos"))


app.get('/', (req, res) => {
    console.log('Bienvenido al server')
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', productInCartRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', orderRoutes);
app.use(handleError);

module.exports = app;