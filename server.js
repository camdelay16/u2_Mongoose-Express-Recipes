const express = require('express')
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cuisineTypesController = require('./controller/cuisineTypesController')
const directionsController = require('./controller/directionsController')
const recipesController = require('./controller/recipesController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => {
    res.send('get your recipes here!')
})

app.get('/cuisines', cuisineTypesController.getAllCuisines)
app.get('/cuisines/:id', cuisineTypesController.getCuisinesById)
app.get('/cuisines/:cuisineName', cuisineTypesController.getCuisineByName)
app.post('/cuisines', cuisineTypesController.createCuisines)
app.put('/cuisines/:id', cuisineTypesController.updateCuisine)
app.delete('/cuisines/:id', cuisineTypesController.deleteCuisine)

app.get('/recipes', recipesController.getAllRecipes)
app.get('/recipes/:id', recipesController.getRecipeById)
app.get('/recipes/:recipeName', recipesController.getRecipeByName)
app.post('/recipes', recipesController.createRecipe)
app.put('/recipes/:id', recipesController.updateRecipe)
app.delete('/recipes/:id', recipesController.deleteRecipe)

app.get('/directions', directionsController.getAllDirections)
app.get('/directions/:id', directionsController.getDirectionById)
app.get('/recipes/:recipeName/directions', directionsController.getDirectionByRecipeName)
app.post('/directions', directionsController.createDirections)
app.put('/directions/:id', directionsController.updateDirection)
app.delete('/directions/:id', directionsController.deleteDirection)