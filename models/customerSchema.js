const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const customerSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    Telephone: {
      type: String,
      required: true,
    },
    Age: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Gender: {
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
