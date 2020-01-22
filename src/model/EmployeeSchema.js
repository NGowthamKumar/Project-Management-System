const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true }, 
  role : {type : String , required : false }},
  { versionKey: false });


module.exports = mongoose.model('Employee', EmployeeSchema);