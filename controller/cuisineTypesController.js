const { CuisineType } = require('../models')

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await CuisineType.find()
        res.json(cuisines)
        console.log(cuisines)
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCuisinesById = async (req, res) => {
    try{
        const { id } = req.params
        const cuisine = await CuisineType.findById(id)
        if (cuisine) {
            return res.json(cuisine)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCuisineByName = async (req, res) => {
    try{
        const { cuisineName } = req.params
        const cuisine = await CuisineType.findOne({cuisine: cuisineName})
        if (cuisine) {
            return res.json(cuisine)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const createCuisines = async (req, res) => {
    try {
        const cuisines = await new CuisineType(req.body)
        await cuisines.save()
        return res.status(201).json({cuisines})
    }
    catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const updateCuisine = async (req, res) => {
    try{
        let { id } = req.params
        let cuisine = await CuisineType.findByIdAndUpdate(id, req.body, { new: true })
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await CuisineType.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('cuisine deleted')
        }
        throw new Error('cuisine not found')
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCuisines,
    getCuisinesById,
    getCuisineByName,
    createCuisines,
    updateCuisine,
    deleteCuisine
}