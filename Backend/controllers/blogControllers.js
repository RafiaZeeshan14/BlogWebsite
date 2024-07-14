
const Blog =  require("../models/blogModels")

const getAllBlog = async (req, res) => {
   try {
    const blog = await Blog.find()
    console.log("🚀 ~ getAllBlog ~ blog:", blog)
    res.send(blog)
   } catch (error) {
    console.log(error)
   }
 
}

const createBlog = async (req, res) => {
    const { username, title, desc,  } = req.body
    const result = await Blog.create({ username, title, desc, })
    console.log("result", result)
    res.send(result);
};


const updateBlog = async (req, res) => {
    console.log("updateBlog:", req.body);
    const { title, desc } = req.body;
    const { id } = req.params; 

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, desc }, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog post not found.' });
        }

        res.json({ message: 'Blog post updated successfully.', updatedBlog });
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};


const deleteBlog = async (req, res) => {
    const { id } = req.params; // Use req.params to get the id from URL
    try {
      const result = await Blog.findByIdAndDelete(id); // Use id directly, not inside an object
      if (!result) {
        return res.status(404).json({ error: 'Blog post not found.' });
      }
      res.json({ message: 'Blog post deleted successfully.' });
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  };
  

module.exports =
{
    getAllBlog, createBlog, updateBlog, deleteBlog
}
