import React, { useState } from 'react'
import Square from './Square'
import Actions from './Actions.tsx'

const BoardGame = () => {

    const [Board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(false)
    const [winner, setWinner] = useState(null)
    const [player1Color, setPlayer1Color] = useState('#f44336')
    const [player2Color, setPlayer2Color] = useState('#4caf50')

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (Board[a] && Board[a] === Board[b] && Board[a] === Board[c]) {
                setWinner(Board[a])
                return Board[a]
            }
        }
        return null
    }


    const setBoardHandler = (position) => {
        if (Board[position] || winner) return

        const newBoard = Board
        newBoard[position] = xIsNext ? 'X' : 'O'
        setBoard(newBoard)

        calculateWinner()
        setXIsNext(!xIsNext)
    }


    const resetHandler = () => {
        setBoard(Array(9).fill(null))
        setWinner(null)
        setXIsNext(false)
    }

    return (
        <main>
            <Actions
                player1Color={player1Color}
                player2Color={player2Color}
                winner={winner}
                onChangePlayer1Color={(e) => { setPlayer1Color(e.target.value) }}
                onChangePlayer2Color={(e) => { setPlayer2Color(e.target.value) }}
                onReset={() => { resetHandler() }} />

            <section className={`board  ${winner ? 'winner--' + winner : ''}`}  >
                {Board.map((square, index) => (
                    <Square key={index} value={square} onClick={() => setBoardHandler(index)}
                        style={{ backgroundColor: square ? (square === 'X' ? player1Color : player2Color) : '#fff' }}
                    />
                ))
                }
            </section>
        </main>
    )
}

export default BoardGame