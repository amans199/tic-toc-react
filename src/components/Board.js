import Square from './Square'

const Board = () => {

    const actionHandler = (e) => {
        console.log(e)
    }

    return (
        <>
            <Square value={1} onClick={() => { actionHandler(22) }} />
            <Square value={2} >chdiksldld</Square>
            <Square value={3} />
        </>
    )
}

export default Board