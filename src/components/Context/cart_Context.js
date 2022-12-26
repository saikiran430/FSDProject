import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext=createContext();
const getLoacalCartData=()=>{
let newCartData=localStorage.getItem("MyCart");
if(newCartData===[]){
    return [];

}else{
    return JSON.parse(newCartData);
}
}
const initialState={

   // cartItem:[],
   cartItem:getLoacalCartData(),
    total_amount:"",
    total_item:"",
    
};

const CartProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initialState);

const addToCart=(quantity,singleProduct)=>{
    dispatch({type:"ADD_TO_CART", payload:{quantity,singleProduct}});
}

const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM", payload:id});
}

//local storage
useEffect(()=>{
    localStorage.setItem("MyCart",JSON.stringify(state.cartItem))
},[state.cartItem]);
   
    return( 
    <CartContext.Provider value={{...state ,addToCart,removeItem}}>
        {children}
    </CartContext.Provider>
    );
};
const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext};