const mongoose=require('mongoose')

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=> {
    console.log('Connected to groupRandomizer')
   
}).catch((error)=>{
    console.log('Error connecting to groupRandomizer',error)
});