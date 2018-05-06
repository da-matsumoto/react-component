import React from 'react'

export default (props) => <h2>{props.heading}</h2>

const PrimaryButton = ({ handleClick, label}) => {
    return (
        <button onClick={handleClick}>
        {label}
        </button>
    )
}

export default PrimaryButton
