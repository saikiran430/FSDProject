
const cartReducer=(state,action)=>{
 if(action.type ==="ADD_TO_CART"){
    let{quantity,singleProduct}=action.payload;
    console.log(singleProduct );
    console.log( quantity)
    let cartProduct;


    cartProduct={
 Id:singleProduct.usedProduct_Id,
    price:singleProduct.usedProduct_Price,
   quantity,
   Name:singleProduct.usedProduct_Name,
  Details:singleProduct.usedProduct_Details

    };
console.log(cartProduct);

   return {
      ...state,
      cartItem:[cartProduct],

   }
 }
 if(action.type==="REMOVE_ITEM")
{
   let updatedCart=state.cart.filter((curElem)=>
      curElem.id!==(action.payload)
   );

   return {
      ...state,
      cartItem:updatedCart,

   }
   
}
return state;
};

export default cartReducer;