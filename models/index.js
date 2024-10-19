const mongoose = require('mongoose')
const CuisineTypeSchema = require('./cuisineType')
const DirectionSchema = require('./direction')
const RecipeSchema = require('./recipe')

const CuisineType = mongoose.model('CuisineType', CuisineTypeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = {
    CuisineType,
    Direction,
    Recipe
}