// 1.import mongoose
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://saniaissac:saniaissac@cluster0.hxmccot.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error) => {
    console.log("error")
})