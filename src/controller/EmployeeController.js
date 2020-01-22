import Project from '../model/ProjectSchema';
import Employee from '../model/EmployeeSchema';



export const employee_login = (req,res) => {
Employee.findOne({ $and: [ { email:req.body.email },{password:req.body.password}]}).exec((error,result) => {
if(error){
res.send('Error in login :'+error);
}else{
res.send("employee login successfull");
}
})   
};


export const employee_register = (req,res) => { 
Employee.findOne({ email:req.body.email }).exec((error,result) => { 
if(error === null){
const employee = new Employee(req.body);
employee.save((error,result) => { 
if(error) res.send('Error in saving admin :'+error);
else res.send("employee registered");})
}else{
res.send("email already registered"+result);
}    
});
}




export const get_project = (req,res) => {  
Project.findOne({ project_name : req.params.project_name }).populate('project_members').exec((error,result) => {
if(error){
res.send('Error in showing the project'+error);
}else{
res.send(result);
}    
});
}


export const get_projects = (req,res) => {  
Project.find({}).populate('project_members').exec((error,result) => {
if(error){
res.send('Error in showing all projects'+error);
}else{
res.send(result);
}    
});
}