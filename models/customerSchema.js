const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);//to make date and time,when add new data it make time to createAt & updateAt that data 

// Create a model based on that schema
const Customer = mongoose.model("Customer", customerSchema);//it take Customer and add s to make cluster

// export the model
module.exports = Customer;
