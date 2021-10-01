const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  email: { type: String, required: true
   },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true }
});

const User=mongoose.model("user",userSchema);

module.exports=User;