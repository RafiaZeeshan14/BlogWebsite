import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BlogPost = ({ _id, username, title, desc, onEdit, onDelete }) => {
  const handleEdit = () => {
    const newTitle = prompt('Enter new title:', title);
    const newDesc = prompt('Enter new description:', desc);

    if (newTitle !== null && newDesc !== null) {
      onEdit(_id, newTitle, newDesc);
    }
  };

  const handleDeletePost = () => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      onDelete(_id);
    }
  };

  return (
    
    <div className="bg-gray-800 text-white p-4 rounded-lg mb-4"  >
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-2xl font-bold  text-gray-200" style={{ fontFamily:"Bona Nova SC, serif"}}>~ TOPIC :  {title} ;</h2>
          <p className="text-gray-400 py-2">By {username}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleEdit} className="text-blue-400 hover:text-blue-600">
            <FaEdit />
          </button>
          <button onClick={handleDeletePost} className="text-red-400 hover:text-red-600">
            <FaTrash />
          </button>
        </div>
      </div>
      <p style={{ fontFamily:"Alata, sans-serif"}} className='font-light'>{desc}</p>
      <div className="flex justify-start mt-2">
        <a href="#" className="text-blue-400 hover:underline text-sm">Read More &gt;</a>
      </div>
    </div>
  );
};

export default BlogPost;

