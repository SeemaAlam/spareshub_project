const mongoose=require("mongoose");

const DB='mongodb+srv://seema:seema123@cluster0.pgyqv.mongodb.net/spareshub?retryWrites=true&w=majority';

const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
};

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("No connection");
})