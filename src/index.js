import app from './config/express';
require('./config/mongoose');

app.use('/api/admin',require('./routes/adminRoutes')); 
app.use('/api/employee',require('./routes/employeeRoutes')); 



app.listen(8000,()=>
{console.log('running on port 8000...');});