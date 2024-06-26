const mongoose  = require("mongoose");


let connectToMDB =async () =>{


    try{
        await mongoose.connect("mongodb+srv://vamshid:vamshid@brnstudent.8hpuxlm.mongodb.net/?retryWrites=true&w=majority&appName=brnstudent")
    
    console.log('Successfully connected to MDB');

    }catch(err){
console.log('Unable to connect to MDB')
    }

   
}

connectToMDB();