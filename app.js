const express = require('express');
const cors = require('cors');

const artistsRoutes = require('./routes/api/v1/artists');
const couriersRoutes = require('./routes/api/v1/couriers');
const customersRoutes = require('./routes/api/v1/customers');
const deliveriesRoutes = require('./routes/api/v1/deliveries');
const orderedItemsRoutes = require('./routes/api/v1/orderedItems');
const ordersRoutes = require('./routes/api/v1/orders');
const paymentsRoutes = require('./routes/api/v1/payments');
const picturesRoutes = require('./routes/api/v1/pictures');
const waybillsRoutes = require('./routes/api/v1/waybills');

const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        data: 'Homepage'
    });
});

app.use('/api/v1/artists', artistsRoutes);
app.use('/api/v1/couriers', couriersRoutes);
app.use('/api/v1/customers', customersRoutes);
app.use('/api/v1/deliveries', deliveriesRoutes);
app.use('/api/v1/orderedItems', orderedItemsRoutes);
app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/payments', paymentsRoutes);
app.use('/api/v1/pictures', picturesRoutes);
app.use('/api/v1/waybills', waybillsRoutes);

app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

module.exports = app;
