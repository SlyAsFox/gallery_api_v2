const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Customer, Order } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const customers = await Customer.findAll();

    res.send({
        data: customers
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const customer = await Customer.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: customer
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const customer = await Customer.create({
        ...req.body
    });

    res.send({
        data: customer
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const customer = await Customer.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedCustomer = await customer.update(req.body);

    res.send({
        data: updatedCustomer
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const customer = await Customer.findOne({
        where: {
            id: req.params.id
        }
    })

    await customer.destroy();

    res.send({
        data: customer
    })
}));

router.get('/:orderId/:email', asyncHandler(async (req, res) => {
    const order = await Order.findOne({
        where: {
            id: req.params.orderId
        }
    });

    const customers = await Customer.findAll({
        include: {

        },
        where: {
            id: order.customerId,
            email: req.params.email
        }
    });

    res.send({
        data: customers
    })
}));

module.exports = router;
