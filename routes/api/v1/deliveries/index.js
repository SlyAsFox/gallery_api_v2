const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Delivery } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const deliveries = await Delivery.findAll();

    res.send({
        data: deliveries
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const delivery = await Delivery.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: delivery
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const delivery = await Delivery.create({
        ...req.body
    });

    res.send({
        data: delivery
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const delivery = await Delivery.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedDelivery = await delivery.update(req.body);

    res.send({
        data: updatedDelivery
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const delivery = await Delivery.findOne({
        where: {
            id: req.params.id
        }
    });

    await delivery.destroy();

    res.send({
        data: delivery
    });
}));

router.get('/:date/:status', asyncHandler(async (req, res) => {
    const deliveries = await Delivery.findAll({
        where: {
            finishDate: req.params.date,
            status: req.params.status
        }
    });

    res.send({
        data: deliveries
    })
}));

module.exports = router;
