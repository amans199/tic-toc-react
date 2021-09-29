const Actions = (props) => {

    return (
        <>
            <header>
                <button onClick={props.onReset}>Reset</button>


                <form>
                    <label>
                        player 1 color
                        <input type="color" value={props.player1Color} onChange={props.onChangePlayer1Color} />
                    </label>
                    <label>
                        player 2 color
                        <input type="color" value={props.player2Color} onChange={props.onChangePlayer2Color} />
                    </label>
                </form>
                {/* 
           <fieldset>
                <legend>Player 1 color</legend>
                    <div className="player">
                    <div className="player-name">{props.player.name}</div>
                    <div className="player-score">
                        <div>{props.player.score}</div>
                        <div>{props.player.name}</div>
                    </div>
                </div>
            </fieldset> */}

                {props.winner && <span className="status" style={{ color: props.winner === 'X' ? props.player1Color : props.player2Color }}>The Winner is {props.winner}</span>}
            </header>
        </>
    )
}

export default Actions;