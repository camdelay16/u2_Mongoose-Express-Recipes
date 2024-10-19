const { Schema } = require('mongoose')

const Recipe = new Schema (
    {
        cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine_id'},
        name: { type: String, required: true },
        difficulty: { type: String, required: true },
        servings: { type: Number, required: true },
        vegan: { type: Boolean, required: true },
        glutenFree: { type: Boolean, required: true },
        kosher: { type: Boolean, required: true },
        prepTime: [{hour: Number, minutes: Number}],
        cookTime: [{hour: Number, minutes: Number}],
        ingredients: [{ quantity: Number, unit: String, name: String}],
        directions: [{ type: Schema.Types.ObjectId, ref: 'Direction'}]
    },
    { timestamps: true }
)

module.exports = Recipe