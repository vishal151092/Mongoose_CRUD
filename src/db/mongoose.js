const mongoose = require('mongoose');

const DB = 'mongodb+srv://vishalsinghvns:mongodb@cluster0.lchr3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log("connection to DB made successfully");
}).catch((error)=>{
    console.log(error);
})
