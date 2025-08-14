import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Project from './pages/Project';

function App() {
  return <>
    <div className='bg-gradient-to-r from-[#090040] via-[#180239] to-[#210F37] h-screen text-white '>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  
  </>
}

export default App;