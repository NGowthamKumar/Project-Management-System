const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true } }, 
  { versionKey: false });


module.exports = mongoose.model('Admin', AdminSchema);