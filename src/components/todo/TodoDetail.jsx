import React from 'react'
import {useParams} from "react-router-dom";

export const TodoDetail = () => {
    const params = useParams();
    return (
        <div>
            ini halaman detail dengan id {params.id}
        </div>
    )
}
