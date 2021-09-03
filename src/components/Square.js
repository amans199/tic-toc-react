

const Square = (props) => {
    return (
        <button type="button" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square