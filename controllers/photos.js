const Photo = require('../models/Photo');
const express = require('express');
const photoRouter = express.Router();


//CREATE ROUTE

photoRouter.post('/', async (req, res) => {
    try {
        const newPhoto = await Photo.create(req.body);

        res
            .status(200)
            .json(newPhoto)
    } catch(error){
        res
            .status(400)
            .json(error)
    }
})

//READ

photoRouter.get('/', async (req, res) => {
    try {
        const foundPhotos = await Photo.find({})

            res
                .status(200)
                .json(foundPhotos)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})


//SHOW

photoRouter.get('/:id', async (req, res) => {
    try {
        const foundPhoto = await Photo.findById(req.params.id)

            res
                .status(200)
                .json(foundPhoto)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})

//DESTROY

photoRouter.delete('/:id', async (req, res) => {
    try {
        const foundPhoto = await Photo.findByIdAndDelete(req.params.id)
        res
            .status(200)
            .json(foundPhoto)
    } catch(error){
        res 
            .status(400)
            .json(error)
    }
})


//UPDATE

photoRouter.put('/:id', async (req, res) => {
    try {
        const foundPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true } )
            res
                .status(200)
                .json(foundPhoto)
    } catch(error) {
        res
            .status(400)
            .json(error)
    }
})


module.exports = photoRouter;