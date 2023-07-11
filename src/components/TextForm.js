import React, {useState} from 'react'


export default function TextForm(props){
    const [text, setText] = useState("Enter your text here"); // two variable is decleared and assigned given value. (array destructring)

    const handleUpClick = ()=>{
        console.log("Upper case was clicked")
        setText(text.toUpperCase()) // I updated text variable using setText. Explore it pal!!
        props.showAlert("Converted to uppercase!",'success')
    }

    const handleLowClick = ()=>{
        console.log("Lower case was clicked")
        setText(text.toLowerCase()) // I updated text variable using setText. Explore it pal!!
        props.showAlert("Converted to Lowercase!",'success')
    }

    const handleOnChange = ()=>{
        console.log("Onchange")
        setText(document.getElementById('myBox').value)
    }

    const handleClipBoard = () =>{
        navigator.clipboard.writeText(document.getElementById('myBox').value).then(()=>{
            props.showAlert("Copied to clipboard!", 'success')
        }).catch(()=>{
            props.showAlert("Failed!", 'warning')
        })
    }

    const handleClearText = ()=>{
        // document.getElementById('myBox').value= ''
        // above code will not work because its state and we cant update it dirctly
        setText('')
        props.showAlert("Text Cleared", 'success')
    }

    const handleSpeak = ()=>{
        const utterance = new SpeechSynthesisUtterance()
        utterance.text = document.getElementById('myBox').value
        speechSynthesis.speak(utterance)
    }

    return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3 ">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}> </textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClipBoard} >Copy to clipboard</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearText} >Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleSpeak} >Speak</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text Summary</h1>
        <p>{text.trim()===''?0:text.replace(/\s+/g, ' ').trim().split(' ').length} words and charecters {text.length} </p>
        <p>{text.trim()===''?0:text.replace(/\s+/g, ' ').trim().split(' ').length*0.008} miniutes required to read for an average reader</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
    )
}