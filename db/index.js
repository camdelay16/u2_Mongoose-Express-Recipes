const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://GAcam90:EJPEEGRG0P3UT3h2@student-cluster.01zfq.mongodb.net/recipesDatabase?retryWrites=true&w=majority&appName=student-cluster')
.then(() => {
    console.log('connected to MongoDB')
})
.catch((e) => {
    console.error('oh no a connection ERROR!', e.message)
})

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db