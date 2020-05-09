const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Payment, Customer } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const payments = await Payment.findAll();

    res.send({
        data: payments
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const payment = await Payment.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: payment
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const payment = await Payment.create({
        ...req.body
    });

    res.send({
        data: payment
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const payment = await Payment.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedPayment = await payment.update(req.body);

    res.send({
        data: updatedPayment
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const payment = await Payment.findOne({
        where: {
            id: req.params.id
        }
    })

    await payment.destroy();

    res.send({
        data: payment
    })
}));

//-------------------

router.get('/:type/:status', asyncHandler(async (req, res) => {
    const payments = await Payment.findAll({
        include: [
            {
                model: Customer
            }
        ],
        where: {
            type: req.params.type,
            status: req.params.status,
        }
    });

    res.send({
        data: payments
    })
}));

module.exports = router;
