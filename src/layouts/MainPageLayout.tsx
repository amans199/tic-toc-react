import React from 'react'
import Routes from '../Routes'

const MainPageLayout = ({ children }) => {
    return (
        <>
            <Routes />
            <main>
                {children}
            </main>
        </>
    )
}


export default MainPageLayout