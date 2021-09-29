

const Square = (props) => {
    return (
        <button style={props.style} type="button" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square