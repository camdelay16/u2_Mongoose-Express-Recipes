const db = require('../db')
const { Recipe, CuisineType } = require('../models')

db.on('error', console.error.bind(console,'MongoDB connection error'))

const main = async () => {
    const italian = await CuisineType.findOne({ cuisine: "Italian" })
    const thai = await CuisineType.findOne({ cuisine: "Thai" })
    const mexican = await CuisineType.findOne({ cuisine: "Mexican" })

    const recipes = [
        {
            cuisine: italian._id,
            name: "Pasta Carbonara",
            difficulty: "Medium",
            servings: 4,
            vegan: false,
            glutenFree: false,
            kosher: false,
            prepTime: [{ hour: 0, minutes: 15 }],
            cookTime: [{ hour: 0, minutes: 20 }],
            ingredients: [
                { quantity: 200, unit: "g", name: "spaghetti" },
                { quantity: 100, unit: "g", name: "pancetta" },
                { quantity: 2, unit: "large", name: "eggs" },
                { quantity: 50, unit: "g", name: "Parmesan cheese" },
                { quantity: 2, unit: "cloves", name: "garlic" },
                { quantity: 1, unit: "tbsp", name: "olive oil" },
                { quantity: 1, unit: "pinch", name: "black pepper" }
            ],
        },
        {
            cuisine: thai._id,
            name: "Pad Thai",
            difficulty: "Medium",
            servings: 2,
            vegan: true,
            glutenFree: false,
            kosher: false,
            prepTime: [{ hour: 0, minutes: 10 }],
            cookTime: [{ hour: 0, minutes: 15 }],
            ingredients: [
                { quantity: 100, unit: "g", name: "rice noodles" },
                { quantity: 50, unit: "g", name: "tofu" },
                { quantity: 1, unit: "large", name: "egg" },
                { quantity: 2, unit: "tbsp", name: "fish sauce" },
                { quantity: 1, unit: "tbsp", name: "sugar" },
                { quantity: 1, unit: "tbsp", name: "lime juice" },
                { quantity: 1, unit: "tbsp", name: "peanuts" },
                { quantity: 1, unit: "cup", name: "bean sprouts" },
                { quantity: 1, unit: "sprig", name: "coriander" }
            ],
        },
        {
            cuisine: mexican._id,
            name: "Tacos al Pastor",
            difficulty: "Medium",
            servings: 4,
            vegan: false,
            glutenFree: false,
            kosher: false,
            prepTime: [{ hour: 0, minutes: 20 }],
            cookTime: [{ hour: 0, minutes: 30 }],
            ingredients: [
                { quantity: 500, unit: "g", name: "pork shoulder" },
                { quantity: 2, unit: "tbsp", name: "adobo sauce" },
                { quantity: 1, unit: "large", name: "onion" },
                { quantity: 1, unit: "cup", name: "pineapple" },
                { quantity: 8, unit: "pieces", name: "corn tortillas" },
                { quantity: 1, unit: "cup", name: "cilantro" },
                { quantity: 1, unit: "lime", name: "lime" }
            ],
        },

    ]

    await Recipe.insertMany(recipes)
    console.log('created recipies')
}

const run = async () => {
    await main()
    db.close()
}

run()