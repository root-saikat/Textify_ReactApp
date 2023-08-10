import React,{useState} from 'react'
import propTypes from 'prop-types'

export default function Textutils(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        setText('');
    }
    const handleCopyText = ()=>{
        var text = document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleRemoveXS = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnCgange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Please type or paste text here');

    return (
        <>
        <div className='container py-5' style={{color: props.mode === 'light'?'black':'white'}}>
            <h4>{props.formHeading}</h4>
            <div className="my-3">
                <textarea className="form-control" value={text} id="Textarea" rows="8" onChange={handleOnCgange} style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>{props.btnUppercase}</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>{props.btnLowercase}</button>
            <button className='btn btn-primary mx-2' onClick={handleClearText}>{props.btnClear}</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyText}>{props.btnCopy}</button>
            <button className='btn btn-primary mx-2' onClick={handleRemoveXS}>{props.btnRemoveXS}</button>
        </div>
        <div className='container pb-5' style={{color: props.mode === 'light'?'black':'white'}}>
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p></p>
            <h4>Text Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
