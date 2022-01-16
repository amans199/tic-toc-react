import React from 'react'


const Square = ({ value, style, onClick }: { value: string, style: any, onClick: any }) => {
    return (
        <button style={style} type="button" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square