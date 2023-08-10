// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import React,{useState} from 'react';

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
    {/* Navbar */}
    <Navbar mode={mode} toggleMode={toggleMode} navTitle="Textify" navItemTwo= "About" navItemOne="Home" navItemThree="Contact Us"/>
    
    {/* textutils form */}
    <Textutils mode={mode} formHeading='Enter Your Text Below' btnUppercase='Click to Uppercase' btnLowercase='Click to Lowecase' btnClear='Clear Text' textValue='Please type or paste text here' btnCopy='Copy Text' btnRemoveXS='Remove Extra Space'/>

    </>
  );
}

export default App;
