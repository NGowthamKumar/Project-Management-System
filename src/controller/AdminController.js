import User from '../model/UserSchema';
import Project from '../model/ProjectSchema';
import Admin from '../model/AdminSchema';
import Team from '../model/TeamSchema';




export const admin_login = (req,res) => {
Admin.findOne({ $and: [ { email:req.body.email },{password:req.body.password}]}).exec((error,result) => {
if(error || result === null ){
res.send('Error in login :' + error);
}else{
res.send("Admin login successfull" + result);
}
})   
};

export const admin_register = (req,res) => {  
console.log(req.body);
const admin = new Admin(req.body);
admin.save((error,result) => {
if(error){
res.send('Error in adding admin :'+error);
}else{
res.send("admin addedddddddd " + result);
}    
});
}


export const add_user = (req,res) => {  
const user = new User(req.body);
user.save((error,result) => {
if(error){
res.send('Error in adding user :'+error);
}else{
res.send("user added " + result);
}    
});
}

export const get_user = (req,res) => {  
User.findOne({email : req.params.email }).exec((error,result) => {
if(error){
res.send('Error in reading user :'+error);
}else{
res.send("user found " + result);
}    
});
}


export const update_user = (req,res) => {  
User.updateOne({email : req.body.email },{$set : { name : req.body.name , password : req.body.password } } ).exec((error,result) => {
if(error){
res.send('Error in updating user :'+error);
}else{
res.send("user updated");
}    
});
}


export const delete_user = (req,res) => {  
User.deleteOne({email : req.body.email }).exec((error,result) => {
if(error){
res.send('Error in deleting user :'+error);
}else{
res.send("user deleted");
}    
});
}


export const add_project = (req,res) => {  
const project = new Project(req.body);
project.save((error,result) => {
if(error){
res.send('Error in adding project :'+error);
}else{
res.send("project added" + result);
}    
});
}


export const update_project_state = (req,res) => {  
Project.updateOne({ project_name : req.body.project_name},{$set : { project_state : req.body.project_state } } ).exec((error,result) => {
if(error){
res.send('Error in updating project :'+error);
}else{
res.send("project updated");
}    
});
}
    

export const delete_project = (req,res) => {  
Project.deleteOne({ project_name : req.body.project_name }).exec((error,result) => {
if(error){
res.send('Error in deleting project :'+error);
}else{
res.send("project deleted");
}    
});
}


export const add_team = (req,res) => {  
const team = new Team(req.body);
team.save((error,result) => {
if(error){
res.send('Error in adding team :'+error);
}else{
Project.findOneAndUpdate({ project_name : req.body.project_name},{ project_members: result._id}).exec();
res.send("team added" + result);
}    
});
}

            
        







