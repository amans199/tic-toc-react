import Square from './Square'
import React, { useState } from 'react'

const Board = () => {

    const [Board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(false)


    const setBoardHandler = (position) => {
        if (Board[position]) return

        setBoard(
            Board.map((square, index) => {
                if (index === position) {
                    return xIsNext ? 'X' : 'O'
                }
                return square
            }
            )
        )

        setXIsNext(!xIsNext)
    }

    return (
        <main className="board">
            <div className="row">
                <Square value={Board[0]} onClick={() => { setBoardHandler(0) }} />
                <Square value={Board[1]} onClick={() => { setBoardHandler(1) }} />
                <Square value={Board[2]} onClick={() => { setBoardHandler(2) }} />
            </div>
            <div className="row">
                <Square value={Board[3]} onClick={() => { setBoardHandler(3) }} />
                <Square value={Board[4]} onClick={() => { setBoardHandler(4) }} />
                <Square value={Board[5]} onClick={() => { setBoardHandler(5) }} />
            </div>
            <div className="row">
                <Square value={Board[6]} onClick={() => { setBoardHandler(6) }} />
                <Square value={Board[7]} onClick={() => { setBoardHandler(7) }} />
                <Square value={Board[8]} onClick={() => { setBoardHandler(8) }} />
            </div>
        </main>
    )
}

export default Board