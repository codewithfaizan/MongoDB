import express, { application } from "express"; //importing express

// import hotelSchema from "./Hotels.js"; //schemas

const app = express();

import "./dbconnect.js";

// import mongodb model
import hotelModel from "./models/Hotels.js";
import Payment from "./models/Payment.js";

const port = 5500;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("SERVER is UP");
});

app.post("/booking",async (req,res) =>{
  try{

    let booking_data=new hotelModel(req.body);
    // console.log(booking_data);

    // await booking_data.save()
    await booking_data.save();
    const payments = new Payment();
    payments.user = booking_data._id;
    payments.save();


    res.status(200).json({"success":"Route is Working"});
  
  }catch(error){
    console.log(error);
    res.status(500).json({"error":"Internal server error"});
  }
});


app.post("/:user_id", async (req, res) => {
  try {
      let user_id = req.params.user_id;
      // console.log(req.params);
      const paymentData = await Payment.findOne({ user: user_id }).populate("user");
      console.log(paymentData);


      // paymentData.payments.push({
      //     "payment_medium": "credit_card",
      //     "payment_date": new Date("Mon Sep 26 2022 09:41:37 GMT+0530"),
      //     "isSuccessful": true
      // });
      // console.log(paymentData.payments[0].payment_date);
      // paymentData.save();

      res.status(200).json({ "success": "Route is Working" })

  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "Internal Server Error" })
  }
})



app.post("/:user_id/:payment_id", async (req, res) => {
  try {

      // let user_id = req.params.user_id;
      let payment_id = req.params.payment_id;

      const filter = { _id: payment_id };

      const update = { isSuccessful: false };

      let paymentModified = await Payment.findOneAndUpdate(filter, update);

      paymentModified.save();
      res.status(200).json({ "success": "Route is Working" })

  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "Internal Server Error" })
  }
})

app.listen(port, (req, res) => {
  console.log("SERVER Started at Port", port);
});
