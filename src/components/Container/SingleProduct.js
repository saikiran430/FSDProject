import { useCartContext } from "components/Context/cart_Context";
import { AppContext } from "components/Context/ProductContext";
import React, { useEffect,useContext, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "components/Footer/Footer";
import image from '../images/img1.jpg';
import CartQuantityToggle from "./CartQuantityToggle";

import { Link } from "react-router-dom";
import '../images/img1.jpg';
import { Img } from "components/Img";
import { Button } from "bootstrap";
import { NavLink } from "react-router-dom";
const SingleProduct=()=>{
    const {addToCart}=useCartContext();
    const{getSingleProduct,isSingleLoading,singleProduct}=useContext(AppContext);
const{id}=useParams();
const [quantity,setQuantity]=useState(1);
console.log(singleProduct);
useEffect(()=>{
getSingleProduct(id);
},[]);
if(isSingleLoading){
 return   <><center><h3>Loading....</h3></center> </>
}
const setDecrease=()=>{
    quantity>1?setQuantity(quantity-1):setQuantity(1);
}
const stock=10;
const setIncrease=()=>{
    quantity<stock?setQuantity(quantity+1):setQuantity(stock);
}
return(
<>
<NavBar />
<div className="mt-2 container-sm bg-white d-flex justify-content-right rounded" style={{height:"auto",padding:30}}>
<div className="row col-12 ">
    <div className="col-6 mt-2 mb-2 ">
    <img className="card-img-top rounded" src={image} alt="Card image cap" style={{height:220,width:600}}/>
      </div>
    <div className="col-6 mt-2 mb-2">

<h1 style={{fontSize:20,backgroundColor:"#f0d3f8",padding:20}}>{singleProduct.usedProduct_Name}</h1>
<span className="row">
    <p style={{fontSize:20,fontWeight:"bold",textDecoration:"underline",fontFamily:"cursive",color:"brown"}}>₹ {singleProduct.usedProduct_Price}</p>
</span>
<span className="mb-4">
    <p style={{fontFamily:"revert-layer"}}>
        {singleProduct.usedProduct_Details}
    </p>
</span>
<CartQuantityToggle  quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>
    <p>{singleProduct.usedProduct_UserId}</p>
 <span className="mt-4">     {/**/}
    <NavLink to="/AddToCart" onClick={()=>addToCart(quantity,singleProduct)} >
    <button style={{backgroundColor:"#b426da"}} className="btn text-white shadow-sm">Add To Cart</button></NavLink>
</span>
    </div>

</div>

</div>


<Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
        </>

);
}

export default SingleProduct;