const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Artist } = require('../../../../models');
const faker = require('faker');
const { Op } = require("sequelize");

// localhost:5000/api/v1/artists - all rows
router.get('/', asyncHandler(async (req, res) => {
    const artists = await Artist.findAll();

    res.send({
        data: artists
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const artist = await Artist.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: artist
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    const artist = await Artist.create({
        ...req.body
    });

    res.send({
        data: artist
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const artist = await Artist.findOne({
        where: {
            id: req.params.id
        }
    })
    const updatedArtist = artist.update(req.body);

    res.send({
        data: updatedArtist
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const artist = await Artist.findOne({
        where: {
            id: req.params.id
        }
    })

    await artist.destroy();

    res.send({
        data: artist
    })
}));

// localhost:5000/api/v1/artists/Odessa/20000 - all rows with :city and :price
router.get('/:birthPlace/:averagePrice', asyncHandler(async (req, res) => {
    const artists = await Artist.findAll({
        where: {
            birthPlace: req.params.birthPlace,
            averagePrice: req.params.averagePrice
        }
    });

    res.send({
        data: artists
    })
}));

module.exports = router;

