import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');
    const UC = ()=>{
       // console.log('Uppercase was clicked');
        let newUText=text.toUpperCase();
        setText(newUText);
    }

    const LC =()=> {
      //  console.log('Lowercase was clicked');
        let newLText=text.toLowerCase();
        setText(newLText);
    }


    const handleonchange=(event)=>{
        console.log('Onchanged');
        setText(event.target.value);

    }


    return (
    <>
        <h3>{props.heading}</h3>
        <textarea className="form-control mb-2"  onChange={handleonchange} value={text}  id="inputBox" rows="8"></textarea>
       <div className='buttons'>
        <button className='btn btn-primary' onClick={UC}>Convert to Uppercase</button>

        <button className='btn btn-secondary' onClick={LC}>Convert to Lowercase</button>
        </div>


        <div className='container my-3'> 
        <h2>Your Text Summary </h2>
        <p> 
            {text.split(" ").length} words and {text.length} characters
            <h3>Average Reading time {text.split(" ").length*.008} minutes </h3>
        </p>
        


        </div>



    </>
  )
}
