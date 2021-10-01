const mongoose = require("mongoose");
const validator = require("validator");


const brandSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true
   },
  price: { type: Number, required: true },
  
},{
  versionKey: false,
  timestamps: true
});

const Brand=mongoose.model("brand",brandSchema);

module.exports=Brand;