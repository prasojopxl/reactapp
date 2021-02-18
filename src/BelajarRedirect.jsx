import React from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'

export const BelajarRedirect = () => {
    const match = useRouteMatch("/belajar-redirect/:nama")
    return (
        <div>
            halo dunia
            {/* <Redirect to="/"/> */}
            {match.params.nama}
            {console.log(match)}
        </div>
    )
}
