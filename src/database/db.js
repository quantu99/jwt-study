const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
async function connect(){
try{
    await mongoose.connect(process.env.MONGODB_URL);
console.log('connected')
}catch(error){
    console.log('fail')
}
} 
module.exports = {connect}