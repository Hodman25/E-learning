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
<<<<<<< HEAD
import Html from './pages/Html';
import CSS from './pages/CSS';
import JavascriptA from './pages/JavascriptA';
import ReactA from './pages/ReactA';
import GitGithup from './pages/GitGithup';
import PythonA from './pages/PythonA';
=======
import Tags from './components/courseCMPNT/Tags';
import HtmlLinks from './pages/HtmlLinks';
import Iframe from './pages/Iframe';
import Function from './components/courseCMPNT/Function';
import Switch from './components/courseCMPNT/Switch';
import Loop from './components/courseCMPNT/Loop';
import Hooks from './components/courseCMPNT/Hooks';
import ReactComponent from './components/courseCMPNT/ReactComponent';
import Props from './components/courseCMPNT/Props';
import Variable from './components/courseCMPNT/Variable';
import Poop from './components/courseCMPNT/Poop';
import Slice from './components/courseCMPNT/Slice';
>>>>>>> a8a881ec752bf45d2e50c6dd195ddeb54ee66761

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
<<<<<<< HEAD
       <Route path='/project/Html' element={<Html/>}/>
       <Route path='/project/CSS' element={<CSS/>}/>
       <Route path='/project/JavascriptA' element={<JavascriptA/>}/>
       <Route path='//project/ReactA' element={<ReactA/>}/>
       <Route path='/project/GitGithub' element={<GitGithup/>}/>
       <Route path='/project/PythonA' element={<PythonA/>}/>
=======
        <Route path='/courses/htmlCss/tags' element={<Tags />} />
        <Route path='/courses/htmlCss/links' element={<HtmlLinks />} />
        <Route path='/courses/htmlCss/iframe' element={<Iframe />} />
        <Route path='/courses/javascript/function' element={<Function />} />
        <Route path='/courses/javascript/switch' element={<Switch />} />
        <Route path='/courses/javascript/loops' element={<Loop />} />
        <Route path='/courses/react/hooks' element={<Hooks />} />
        <Route path='/courses/react/component' element={<ReactComponent />} />
        <Route path='/courses/react/props' element={<Props />} />
        <Route path='/courses/python/variable' element={<Variable />} />
        <Route path='/courses/python/poop' element={<Poop />} />
        <Route path='/courses/python/slice' element={<Slice />} />
>>>>>>> a8a881ec752bf45d2e50c6dd195ddeb54ee66761
      </Routes>
    </div>
  

}

export default App;