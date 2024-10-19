const db = require('../db')
const { CuisineType } = require('../models')

db.on('error', console.error.bind(console,'MongoDB connection error'))

const main = async () => {

    const cuisineTypes = [
        {
            cuisine: "Italian",
            origin: "Italy",
            flavorProfile: "Rich and savory, featuring flavors from tomatoes, garlic, basil, and olive oil."
          },
          {
            cuisine: "Thai",
            origin: "Thailand",
            flavorProfile: "A balance of sweet, sour, salty, and spicy, often utilizing ingredients like lemongrass, chili, and coconut milk."
          },
          {
            cuisine: "Mexican",
            origin: "Mexico",
            flavorProfile: "Bold and zesty, characterized by the use of chilies, lime, cumin, and fresh herbs like cilantro."
          },
    ]

    await CuisineType.insertMany(cuisineTypes)
    console.log('created cuisine types')
}

const run = async () => {
    await main()
    db.close()

}

run()