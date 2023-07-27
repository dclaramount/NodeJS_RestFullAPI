const mongoose = require(`mongoose`);
require(`dotenv`).config()

async function dbConnect (){
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log(`Succesfully Connected to MongoDB Atlas`)
  }).catch((error) => {
    console.log(`Unable to connect to MongoDB with error ${error}`);
  })
} 

module.exports = dbConnect;