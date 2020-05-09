const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Waybill } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const waybills = await Waybill.findAll();

    res.send({
        data: waybills
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const waybill = await Waybill.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: waybill
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const waybill = await Waybill.create({
        ...req.body
    });

    res.send({
        data: waybill
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const waybill = await Waybill.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedWaybill = await waybill.update(req.body);

    res.send({
        data: updatedWaybill
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const waybill = await Waybill.findOne({
        where: {
            id: req.params.id
        }
    })

    await waybill.destroy();

    res.send({
        data: waybill
    })
}));


//---------------------------------
router.get('/:date/:status', asyncHandler(async (req, res) => {
    //
    const waybills = await Waybill.findAll({
            where: {
                date: req.params.date,
                status: req.params.status
            }
        }
    );

    res.send({
        data: waybills
    })
}));

module.exports = router;
