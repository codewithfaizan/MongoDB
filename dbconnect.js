import mongoose from "mongoose";

async function dbconnect(){


    try {
        await mongoose.connect("mongodb+srv://faizan:faizanoic%402309@cluster0.vaeikt9.mongodb.net/hotelDB")
        console.log("MongoDB is connected")
   
    } catch (error) {
        console.log(error);
        
    }
}



dbconnect();

