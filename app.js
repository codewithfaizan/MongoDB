import express from "express"; //importing express

import hotelModel from "./Hotels.js"; //schemas

const app = express();

import "./dbconnect.js";

const port = 5500;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("SERVER is UP");
});

app.post("/booking",async (req,res) =>{
  try{
    let booking_data=new hotelModel(req.body);
    console.log(booking_data);
    // await booking_data.save()
    await booking_data.save();
    res.status(200).json({"success":"Route is Working"});
  
  }catch(error){
    console.log(error);
    res.status(500).json({"error":"Internal server error"});
  }
});


app.listen(port, (req, res) => {
  console.log("SERVER Started at Port", port);
});
