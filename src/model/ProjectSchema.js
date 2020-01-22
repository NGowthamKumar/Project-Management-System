const mongoose = require('mongoose');
import Team from '../model/TeamSchema';

const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
project_name: { type: String },
project_id: { type: Number },
project_state : { type: String , required :false},
project_members : { type : Schema.Types.ObjectId , ref : Team , required : false}
},
{ versionKey: false });


module.exports = mongoose.model('Project', ProjectSchema);