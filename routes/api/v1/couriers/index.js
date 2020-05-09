const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Courier } = require('../../../../models');
const faker = require('faker');
const { Op } = require("sequelize");

// localhost:5000/api/v1/couriers/query
router.get('/', asyncHandler(async (req, res) => {
    const couriers = await Courier.findAll();

    res.send({
        data: couriers
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const courier = await Courier.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: courier
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const courier = await Courier.create({
        ...req.body
    });

    res.send({
        data: courier
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const courier = await Courier.findOne({
        where: {
            id: req.params.id
        }
    })
    const updatedCourier = await courier.update(req.body);

    res.send({
        data: updatedCourier
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const courier = await Courier.findOne({
        where: {
            id: req.params.id
        }
    })

    await courier.destroy();

    res.send({
        data: courier
    })
}));

router.get('/query', asyncHandler(async (req, res) => {
    const courier = await Courier.findOne({
        where: {
            [Op.or]: [
                { fullName: 'Brittany Hubbard' },
                { fullName: 'Kenyon Conner' }
            ]
        }
    });

    res.send({
        data: courier
    })
}));

module.exports = router;
