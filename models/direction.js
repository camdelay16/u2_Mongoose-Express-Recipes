const { Schema } = require('mongoose')

const Direction = new Schema (
    {
        step: { type: Number, required: true},
        instruction: { type: String, required: true},
        recipe: { type: Schema.Types.ObjectId, ref: "Recipe" }
    },
    { timestamps: true }
)

module.exports = Direction