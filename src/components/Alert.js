import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {

    const cap = (word) => {

        const new2 = word.toLowerCase();
        return new2.charAt(0).toUpperCase() + new2.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {cap(props.alert.type)} <strong>{props.alert.text}</strong>

        </div>
    )
}
