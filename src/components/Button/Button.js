import React from 'react'

const Button = (props) => {
    return (<a onClick={() => props.firstButton()} className={props.class} style={props.style}>{props.text}</a>)
}

export default Button