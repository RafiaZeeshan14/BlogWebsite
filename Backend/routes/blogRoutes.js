const express = require('express');
const { getAllBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers');
const router = express.Router() ; //store router in a variable 


//CRUD Operations , main URL's 
router
    .get("/" , getAllBlog)    
    .post("/add" , createBlog)
    .put("/:id", updateBlog)  
    .delete("/:id", deleteBlog);

module.exports = router;
