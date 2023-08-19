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
        navigator.clipboard.writeText(text);
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
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-lg-0 my-2' onClick={handleUpClick}>{props.btnUppercase}</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-lg-0 my-2' onClick={handleLoClick}>{props.btnLowercase}</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-lg-0 my-2' onClick={handleClearText}>{props.btnClear}</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-lg-0 my-2' onClick={handleCopyText}>{props.btnCopy}</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-lg-0 my-2' onClick={handleRemoveXS}>{props.btnRemoveXS}</button>
        </div>
        <div className='container pb-lg-0 pb-5' style={{color: props.mode === 'light'?'black':'white'}}>
            <h4>Your Text Summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p></p>
            <h4>Text Preview</h4>
            <p>{text.length>0?text: "Nothing to preview"}</p>
        </div>
        </>
    )
}
