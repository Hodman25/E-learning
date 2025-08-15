import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Project from './pages/Project';
import Htmlcss from './pages/Htmlcss';
import Javascript from './pages/Javascript';
import Github from './pages/Github';
import ReactPage from './pages/React';
import Python from './pages/Python';

function App() {
  return  <div className='bg-gradient-to-r from-[#070224] via-[#180239] to-[#210F37] text-white'>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/htmlCss' element={<Htmlcss/>} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/github' element={<Github />} />
        <Route path='/react' element={<ReactPage />} />
        <Route path='/python' element={<Python />} />
      </Routes>
    </div>
  

}

export default App;