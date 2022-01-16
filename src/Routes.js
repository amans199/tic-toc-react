import React from 'react'
import { Link } from 'react-router-dom'

const Routes = () => {
    return (
        <header>
            <Link to="/">home</Link>
            <Link to="/game" >game</Link>
            <Link to="/history">history</Link>
            <Link to="/playground">playground</Link>
        </header>

    )
}

export default Routes