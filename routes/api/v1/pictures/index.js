const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Picture, Artist } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const pictures = await Picture.findAll();

    res.send({
        data: pictures
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const picture = await Picture.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: picture
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const picture = await Picture.create({
        ...req.body
    });

    res.send({
        data: picture
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const picture = await Picture.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedPicture = await picture.update(req.body);

    res.send({
        data: updatedPicture
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const picture = await Picture.findOne({
        where: {
            id: req.params.id
        }
    })

    await picture.destroy();

    res.send({
        data: picture
    })
}));



//-------------------------------
router.get('/:year/:price', asyncHandler(async (req, res) => {

    const pictures = await Picture.findAll({
        include: [{
            model: Artist
        }],
        where: {
            createdYear : req.params.year,
            price: req.params.price
        }
    });

    res.send({
        data: pictures
    })
}));

module.exports = router;
