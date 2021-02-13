import React, {useState} from 'react'
import {Header} from "./components/Header";
import {Detail} from "./components/Detail";


export const Cart = () => {
    const [cart, setCart] = useState(0);
    return (
        <div>
            <Header keranjang={cart}/>
            <Detail tambahkeranjang={()=> setCart((p)=>p+1)}/>
        </div>
    )
}
