import React, { useState } from 'react'

import PropTypes from 'prop-types'
export default function UpperCase(props) {

    const [text, setText] = useState('');


    const uppercase = () => {
        let newvar = text.toUpperCase();

        setText(newvar);
        props.showAlert("Text converted to Uppercase", "success");
    }
    const lowercase = () => {
        let newvar = text.toLowerCase();

        setText(newvar);
        props.showAlert("Text converted to lowercase", "success");
    }
    const cleartext = () => {


        setText("");
        props.showAlert("Text cleared", "success");
    }
    const change = (event) => {
        setText(event.target.value);


    }
    const cremover = () => {
        let new2 = text.trim();

        setText(new2);
        props.showAlert(" Extra blank spaces removed", "success");

    }
    const capital = () => {
        let new2 = text.charAt(0);
        let y = new2.toUpperCase();
        setText(y + text.slice(1));
        props.showAlert("First character capitalized", "success");





    }

    return (
        <>
            <div className="container mt-4">
                <div className="form-floating">
                    <h4 style={{ color: props.mode === 'light' ? '#111111' : 'light' }}>{props.heading}</h4>
                    <textarea className="form-control" onChange={change} value={text} placeholder="text here" id="textarea" style={{ backgroundColor: props.mode === '#111111' ? '#111111' : 'white', color: props.mode === '#111111' ? 'white' : 'black' }}> </textarea>


                </div>

                <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 mx-2" onClick={uppercase}>Convert to UpperCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 mx-2" onClick={lowercase}>Convert to LowerCase</button>

                <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 mx-2" onClick={cremover}>Trim the spaces</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2" onClick={capital}>Capitalize first word</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 mx-2" onClick={cleartext}>Clear text</button>
            </div>


            <div className="container mt-5" style={{ color: props.mode === 'light' ? '#111111' : 'light' }}>
                <h4 style={{ color: props.mode === '#111111' ? 'white' : 'black' }}>Word count and length of characters are as:</h4>
                <p style={{ color: props.mode === '#111111' ? 'white' : 'black' }}>No. of characters are: {text.length}</p>


                <p style={{ color: props.mode === '#111111' ? 'white' : 'black' }}>Word count is :{text.split(/\s+/).filter((el) => { return el.length !== 0; }).length}</p>
                {/* <h3>Preview trimmed</h3> Regex used in top line at split. (+s) it means exclude any space and new lines i.e dont count them as words
                <p>{new2}</p> */}


                <h3 className="my-5" style={{ color: props.mode === '#111111' ? 'white' : 'black' }}>Preview here</h3>
                <p style={{ color: props.mode === '#111111' ? 'white' : 'black' }}>{text.length > 0 ? text : 'Nothing to preview'}</p>


            </div>

        </>

    );
}
UpperCase.propTypes = {
    heading: PropTypes.string

}
UpperCase.defaultProps = {
    heading: 'default heading'

};