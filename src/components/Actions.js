import React from 'react'

const Actions = ({ onReset, player1Color, player2Color, onChangePlayer1Color, onChangePlayer2Color, winner }) => {

    return (
        <>
            <header>
                <button type="button" onClick={onReset}>Reset</button>


                <form>
                    <label>
                        player 1 color
                        <input type="color" value={player1Color} onChange={onChangePlayer1Color} />
                    </label>
                    <label>
                        player 2 color
                        <input type="color" value={player2Color} onChange={onChangePlayer2Color} />
                    </label>
                    {/* <button type="submit">Submit</button> */}
                </form>
                {/* 
           <fieldset>
                <legend>Player 1 color</legend>
                    <div className="player">
                    <div className="player-name">{player.name}</div>
                    <div className="player-score">
                        <div>{player.score}</div>
                        <div>{player.name}</div>
                    </div>
                </div>
            </fieldset> */}

                {winner && <span className="status" style={{ color: winner === 'X' ? player1Color : player2Color }}>The Winner is {winner}</span>}
            </header>
        </>
    )
}

export default Actions;