import React from 'react'
import {useLocation} from "react-router-dom";

export const TodoDetailState = () => {
    const location = useLocation();
    return (
        <div>
            {console.log(location)}
            STATE ini halaman detail dengan id {location.state.id}
        </div>
    )
}
