import React from 'react'


const Square = ({ value, style, onClick }) => {
    return (
        <button style={style} type="button" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square