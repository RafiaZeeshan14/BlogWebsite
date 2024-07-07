
const Blog =  require("../models/blogModels")

const getAllBlog = (req, res) => {
    res.send("get all Blogs")
}

const createBlog = async (req, res) => {
    const { username, title, desc,  } = req.body
    const result = await Blog.create({ username, title, desc, })
    console.log("result", result)
    res.send(result);
};


const updateBlog = (req, res) => {
    res.send("update blogs")
}

const deleteBlog = async (req, res) => {
    const { id } = req.body
    const result = await Blog.findByIdAndDelete({ _id: id })
    res.send(result)
}


module.exports =
{
    getAllBlog, createBlog, updateBlog, deleteBlog
}
