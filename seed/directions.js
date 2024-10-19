const db = require('../db')
const { Direction, Recipe } = require('../models')

db.on('error', console.error.bind(console,'MongoDB connection error'))

const main = async () => {
    const pastaCarb = await Recipe.findOne({ name: "Pasta Carbonara" })
    const padThai = await Recipe.findOne({ name: "Pad Thai" })
    const tacos = await Recipe.findOne({ name: "Tacos al Pastor" })

    const directions = [
            {step: 1, instruction: "Boil a large pot of salted water and cook spaghetti according to package instructions. Drain and set aside.", recipe: pastaCarb._id},
            {step: 2, instruction: "In a pan, heat olive oil and sauté chopped garlic and pancetta until crispy.", recipe: pastaCarb._id },
            {step: 3, instruction: "In a bowl, whisk together eggs and grated Parmesan cheese. Add black pepper to taste.", recipe: pastaCarb._id},
            {step: 4, instruction: "Combine cooked spaghetti with the pancetta mixture. Remove from heat and quickly stir in the egg mixture until creamy.", recipe: pastaCarb._id},
            {step: 5, instruction: "Serve immediately with additional Parmesan and black pepper on top.", recipe: pastaCarb._id},

            {step: 1, instruction: "Soak rice noodles in warm water for about 20 minutes, or until softened. Drain and set aside.", recipe: padThai._id},
            {step: 2, instruction: "In a pan, heat some oil and add tofu. Sauté until golden brown, then push to the side of the pan.", recipe: padThai._id},
            {step: 3, instruction: "Add the egg and scramble it. Then mix it with the tofu.", recipe: padThai._id},
            {step: 4, instruction: "Add the soaked noodles, fish sauce, sugar, and lime juice, and stir-fry for a few minutes until well combined.", recipe: padThai._id},
            {step: 5, instruction: "Serve topped with crushed peanuts, bean sprouts, and fresh coriander.", recipe: padThai._id},
            
            {step: 1, instruction: "Marinate the pork shoulder in adobo sauce for at least 2 hours or overnight.", recipe: tacos._id},
            {step: 2, instruction: "Preheat a grill or oven to medium-high heat.", recipe: tacos._id},
            {step: 3, instruction: "Grill the marinated pork for about 20-30 minutes, until cooked through and slightly charred.", recipe: tacos._id},
            {step: 4, instruction: "Chop the grilled pork and mix with diced pineapple and onion.", recipe: tacos._id},
            {step: 5, instruction: "Warm the corn tortillas and fill them with the pork mixture. Top with chopped cilantro and a squeeze of lime.", recipe: tacos._id}            
    ]

    await Direction.insertMany(directions)
    console.log('created directions')
}

const run = async () => {
    await main()
    db.close()
}

run()