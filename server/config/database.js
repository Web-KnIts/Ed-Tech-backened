require('dotenv').config();
const mongoose = require('mongoose')

const Database_name = "Edutech"

const connectDataBase =()=>
{
    mongoose.connect(`${process.env.Mongo_Url}${Database_name}`,{useNewUrlParser:true})
    .then(()=>console.log(`Database Connected Successfully with ${Database_name}`)).catch(
        (err)=>console.log(`error while connecting to Database ....\n${err.message}`)
    )
}

module.exports = connectDataBase;