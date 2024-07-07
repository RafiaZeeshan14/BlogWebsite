const mongoose = require('mongoose');  
  
  
  async function dbConnect(){
   await mongoose.connect('mongodb+srv://rafiazeeshan214:g0CN2OBnhYsONqXw@cluster0.xitychc.mongodb.net/blogweb');
}

module.exports=dbConnect