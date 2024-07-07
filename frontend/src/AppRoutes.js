import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import BlogHome from './components/blogHome'
import BlogEditor from './components/blogEditor'
import App from './App'
import AllBlogs from './components/AllBlogs'



const AppRoutes = () => {
  return (
    <div>
    <Routes>
    {/* <Route path='/' element={<BlogHome />} /> */}
      <Route path='/' element={<BlogHome />} />
      <Route path='/write' element={<BlogEditor />} />
      <Route path='/blogs' element={<AllBlogs />} />
    </Routes>
  </div>
  )
}

export default AppRoutes