const { Recipe } = require('../models')

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
        console.log(recipes)
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getRecipeById = async (req, res) => {
    try{
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const getRecipeByName = async (req, res) => {
    try{
        const { recipeName } = req.params
        const recipe = await Recipe.findOne({name: recipeName})
        if (recipe) {
            return res.json(recipe)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipes = await new Recipe(req.body)
        await recipes.save()
        return res.status(201).json({recipes})
    }
    catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const updateRecipe = async (req, res) => {
    try{
        let { id } = req.params
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('recipe deleted')
        }
        throw new Error('recipe not found')
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getRecipeByName,
    createRecipe,
    updateRecipe,
    deleteRecipe
}