const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
//    mongodb string
     const con=await mongoose.connect(process.env.MONGO_URI)
      console.log('Mongodb Connected: ${con.connection.host}')
    }catch(err){
       console.log(err);
       process.exit(1);
    }
}
module.exports=connectDB