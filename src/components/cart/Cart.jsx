import React, {useState} from 'react'
import "./style.scss";
import {Header} from "./Header"
import {Description} from "./Description";


export const Cart = () => {
    const [cart, setCart] = useState(0)

    return (
        <div className="container">
            <Header total={cart}/>
            <Description tambah={()=>setCart(cart+1)} kurang={()=>setCart(cart-1)}/>
        </div>
    )
}
