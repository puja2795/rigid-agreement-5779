import React, { useState } from "react";
import { useEffect } from "react";


export const CartContext = React.createContext();
export default function CartContextProvider({children}){
    const [count, setCount] = useState(0);
    const cartCount = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() =>{
        console.log(cartCount.length)
        setCount(cartCount.length);
    },[cartCount]);

    return(
        <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>
    )
}