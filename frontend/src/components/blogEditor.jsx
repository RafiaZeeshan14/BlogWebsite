import React, { useState } from 'react';

const BlogEditor = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with:', { username, title, desc });

    const blogPost = {
      username,
      title,
      desc,
    };

    try {
      const response = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogPost),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Response:', result);
        setMessage('Blog post created successfully!');
        // Reset form
        setUsername('');
        setTitle('');
        setDesc('');
      } else {
        setMessage('Failed to create blog post.');
      }
    } catch (error) {
      setMessage('Error creating blog post.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Write Your Blog</h2>
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;

