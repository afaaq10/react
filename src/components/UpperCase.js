import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function UpperCase(props) {

    const [text, setText] = useState('Enter text here');

    console.log(text);
    const clicked = () => {
        let newvar = text.toUpperCase();

        setText(newvar);
    }
    const change = (event) => {
        setText(event.target.value);


    }

    return (
        <>
            <div className="container mt-4">
                <div className="form-floating">
                    <h4>{props.heading}</h4>
                    <textarea className="form-control" onChange={change} value={text} placeholder="text here" id="textarea" > </textarea>


                </div>

                <button type="button" className="btn btn-primary mt-2" onClick={clicked}>Submit</button>
            </div>


            <div className="container">
                <h4>Word count and length of characters are as:</h4>
                <p>No. of characters are: {text.length}</p>
                <p>Word count: {text.split(' ').length}</p>


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