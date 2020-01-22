const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new mongoose.Schema({
project_name : { type: String },
member_1 : { type: String , unique : true },
member_2 : { type: String , unique : true },
member_3 : { type: String , unique : true },
member_4 : { type: String , unique : true },
member_5 : { type: String , unique : true ,required : false},
member_6 : { type: String , unique : true ,required : false},
member_7 : { type: String , unique : true ,required : false}
},
{ versionKey: false });


module.exports = mongoose.model('Team', TeamSchema);