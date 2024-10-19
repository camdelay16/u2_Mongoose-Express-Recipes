const { Direction, Recipe } = require('../models')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
        console.log(directions)
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getDirectionById = async (req, res) => {
    try{
        const { id } = req.params
        const direction = await Direction.findById(id)
        if (direction) {
            return res.json(direction)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getDirectionByRecipeName = async (req, res) => {
    try{
        const recipe = await Recipe.findOne({name: req.params.recipeName})
        if (!recipe) {
            return res.status(400).json('recipe not found')
        }

        const directions = await Direction.find({recipe: recipe._id})
        res.json(directions)
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const createDirections = async (req, res) => {
    try {
        const directions = await new Direction(req.body)
        await directions.save()
        return res.status(201).json({directions})
    }
    catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const updateDirection = async (req, res) => {
    try{
        let { id } = req.params
        let direction = await Direction.findByIdAndUpdate(id, req.body, { new: true })
        if (direction) {
            return res.status(200).json(direction)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteDirection = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Direction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('direction deleted')
        }
        throw new Error('direction not found')
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllDirections,
    getDirectionById,
    getDirectionByRecipeName,
    createDirections,
    updateDirection,
    deleteDirection
}