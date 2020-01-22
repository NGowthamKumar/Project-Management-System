import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/pms",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true , useFindAndModify : false },(error) => {
if(error){
    console.error('Error : unable to connect mongodb\n'+error);
}else{
    console.error("Mongodb connected successfully");
}
});





