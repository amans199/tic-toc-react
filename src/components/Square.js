

const Square = (props) => {
    return (
        <button type="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Square