// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Textutils from './components/Textutils';
import Contactus from './components/Contactus';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <div className='d-flex flex-column app-container'>
        {/* Navbar */}
        <Navbar mode={mode} toggleMode={toggleMode} navTitle="Textify" navItemTwo= "About" navItemOne="Home" navItemThree="Contact Us"/>

        <Routes>
          <Route path="/" element={<Textutils mode={mode} formHeading='Enter Your Text Below' btnUppercase='Click to Uppercase' btnLowercase='Click to Lowecase' btnClear='Clear Text' textValue='Please type or paste text here' btnCopy='Copy Text' btnRemoveXS='Remove Extra Space'/>} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contactus" element={<Contactus mode={mode}/>} />
        </Routes>

        {/* footer */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
