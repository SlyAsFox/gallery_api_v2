const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Order, Waybill } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const orders = await Order.findAll();

    res.send({
        data: orders
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const order = await Order.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: order
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const order = await Order.create({
        ...req.body
    });

    res.send({
        data: order
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const order = await Order.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedOrder = await order.update(req.body);

    res.send({
        data: updatedOrder
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const order = await Order.findOne({
        where: {
            id: req.params.id
        }
    })

    await order.destroy();

    res.send({
        data: order
    })
}));

// /api/v1/orders/waybill/:status/:waybillid
router.get('/waybill/:status/:id', asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        attributes: ['date', 'id'],
        where: {
            status: req.params.status,
            waybillId: req.params.id
        }
    });

    res.send({
        data: orders
    })
}));

// /api/v1/orders/details/:status/:details
router.get('/details/:status/:details', asyncHandler(async (req, res) => {
    const orders = await Order.findAll({
        attributes: ['date', 'id'],
        where: {
            status: req.params.status,
            details: req.params.details
        }
    });

    res.send({
        data: orders
    })
}));

module.exports = router;
