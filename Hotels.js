// exampleschemes.js

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  user:{
    firstname: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 2,
  },
  address: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 2,
  },
  zipcode: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 2,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  phone: {
    type: Number,
    required: true,
    unique:true,
  },
},
hotel:{
    checkindate: {
        type: String,
        required: true,
      },
      checkoutdate: {
        type: String,
        required: true,
      },
      checkintime: {
        type: String,
        required: true,
      },
      checkouttime: {
        type: String,
        required: true,
      },
      numberofadults: {
        type:Number,
        max: 5,
        min: 1
      },
      numberofchildren: {
        type:Number,
        max: 5,
        min: 0
      },
      numberofrooms: {
        type: Number,
        max: 5,
        min: 1,
      },
      roomtype: {
        type: [],
      },
      specialInstruction: {
        type: String,
        default:"online"
      }
},

 
});

const hotelModel = new mongoose.model("Hotel", hotelSchema, "hotel_bookings");

// hotel is name of the model
// hotelModel is optional

export default hotelModel;
