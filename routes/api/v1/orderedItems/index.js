const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { OrderedItem, Picture } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const items = await OrderedItem.findAll();

    res.send({
        data: items
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const item = await OrderedItem.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: item
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const item = await OrderedItem.create({
        ...req.body
    });

    res.send({
        data: item
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const item = await OrderedItem.findOne({
        where: {
            id: req.params.id
        }
    });

    const updatedItem = await item.update(req.body);

    res.send({
        data: updatedItem
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const item = await OrderedItem.findOne({
        where: {
            id: req.params.id
        }
    });

    await item.destroy();

    res.send({
        data: item
    });
}));


router.get('/:count/:picture', asyncHandler(async (req, res) => {
    const picture = await Picture.findOne({
        where: {
            name: req.params.picture
        }
    });
    let id = picture.id;

    const items = await OrderedItem.findAll({
        where: {
            pictureId: id,
            count: req.params.count
        }
    });

    res.send({
        data: items
    })
}));


module.exports = router;
