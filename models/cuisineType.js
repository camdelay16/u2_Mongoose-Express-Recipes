const { Schema } = require('mongoose')

const CuisineType = new Schema (
    {
        cuisine: { type: String, required: true },
        origin: { type: String, required: true },
        flavorProfile: { type: String, required: true },
        recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
    },
    { timestamps: true }
)

module.exports = CuisineType