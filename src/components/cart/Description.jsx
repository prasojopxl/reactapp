import React from 'react'

export const Description = (props) => {
    return (
        <React.Fragment>
            <div className="desc">
                <p>Lorem ipsum dolor, sit amet consectetur  elit. 
                Reiciendis aperiam repellendus iusto voluptatem</p>
            </div>
            <div className="addcart">
                <button onClick={props.kurang}>- Keranjang</button>
                <button onClick={props.tambah}>+ Keranjang</button>
            </div>
        </React.Fragment>
    )
}
