import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import BlogGrid from './pages/BlogGrid'
import Home from './pages/Home'
// import AllBlogs from './pages/AllBlogs';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogGrid />} />
        {/* <Route path="/AllBlogs" element={<AllBlogs />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App