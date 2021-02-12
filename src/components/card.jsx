import React from 'react'

export const Card = (props) => {
    return (
            <div className="wrp-iteminput">
                <span className="subtitle">{props.title}</span>
                {props.content}
            </div>
    )
}
