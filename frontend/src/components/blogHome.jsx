import React, { useState, useEffect } from 'react';
import BlogPost from './blogPost';


const BlogHome = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/blog');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleEditPost = async (_id, newTitle, newDesc) => {
    try {
      const response = await fetch(`http://localhost:8000/blog/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, desc: newDesc }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog post.');
      }

      // Update the local state after successful update
      const updatedPosts = posts.map(post =>
        post._id === _id ? { ...post, title: newTitle, desc: newDesc } : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };
  const handleDeletePost = async (_id) => {
    try {
      const response = await fetch(`http://localhost:5000/blog/${_id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete blog post.');
      }
  
      // Update the local state after successful delete
      const updatedPosts = posts.filter(post => post._id !== _id);
      setPosts(updatedPosts); // Update state to reflect deletion
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };
  
  
  
  return (
    <>
   
      <div className="bg-gray-900 h-full p-4 pb-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Latest</h1>
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <p className="text-white text-center">Loading...</p>
          ) : (
            posts.map((post) => (
              <BlogPost
                key={post._id}
                _id={post._id}
                username={post.username}
                title={post.title}
                desc={post.desc}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogHome;

