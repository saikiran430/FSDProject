import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import FaMinus from 'react-icons/fa';
function CartQuantityToggle({quantity,setDecrease,setIncrease}){
return(

    <div className='d-flex justitfy-content-center' >
        <p>Quantity</p>
       <button className='btn' onClick={()=>setDecrease()}>
       -
        </button>
        <div className='p-4'>{quantity}</div>
        <button className='btn' onClick={()=>setIncrease()}>
            +
        </button>
       
    </div>
);
}
export default CartQuantityToggle;