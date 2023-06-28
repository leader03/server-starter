const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI, {
        // to prevent console error
        useNewUrlParser: true,
        useUnifiedTopology: true
       }) 
       console.log(`mongo db connected : ${conn.connection.host}   `)
    } catch (error) {
        console.log(error)
        // to end the process when it say error
        process.exit(1)
    }
}

module.exports = connectDB