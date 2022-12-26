import React,{useContext, useEffect, useState} from "react";
import NavBar from "./NavBar";
import Footer from "components/Footer/Footer";
import image from '../images/img1.jpg';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Input } from "components";
import { AppContext } from "components/Context/ProductContext";
import { useCartContext } from "components/Context/cart_Context";
import SingleProduct from "../Container/SingleProduct";
import { NavLink } from "react-router-dom";

function ProductList() {
  
    const [product,setProducts]=useState([]);
    const[quantity,setQuantity]=useState(1);
    const[userId,setUserId]=useState('');
    const[usedProduct_Id,setUsedProduct_Id]=useState();
const [success,setSuccess]=useState(false);
   const BaseUrl="https://localhost:7012/api/UsedProduct";
    const BaseUrlCart="https://localhost:7012/api/AdminCart";
    const navigate=useNavigate();
const{isLoading,products,singleproduct}=useContext(AppContext);

   const handleSave=()=>{
   
   axios.get(BaseUrl).then((result)=>{
    
   setProducts(result.data); 
   if(isLoading){

    return <p>Loading....</p>
   }
     return  console.log(product);
       
      }).catch((error)=>{
        console.log(error);
      })
    }

    const handleCart=(e)=>{
   e.preventDefault();
   const data={
    UsedProduct_Id:usedProduct_Id,
   Quantity :quantity,
   User_Id :userId
 }

   console.log(data.UsedProduct_Id,data.Quantity,data.User_Id);
     
   axios.post(BaseUrlCart,data).then((result)=>{
      setSuccess(true); 
        console.log(product);
          return setProducts(result.data); 
            
           }).catch((error)=>{
             console.log(error);
          })
          }

   useEffect(()=>{
    
   if(success==true){
    navigate("/AddToCart")
   }else{
    navigate("/ProductList")
   }},[success]);
    return (
<>
<NavBar states="true"/>
<div className="container-sm justify-content-center">
    
   <ul>
        <li className="row ">
{
   
   
   products.map((value,key)=>
   
 
 <div class="card mb-4 mr-4 shadow-sm" style={{width: 250}}>
   <NavLink key={key}  to={`/SingleProduct/${value.usedProduct_Id}`}>
  <img className="card-img-top" src={image} alt="Card image cap"/></NavLink>
  <div className="card-body"> 
      <h1 className="card-title" style={{fontSize:23,fontWeight:"bold"}}>{value.usedProduct_Name}</h1>
        <div className="row">
       <p style={{fontSize:20,color:"green"}}>Price</p> <p style={{fontSize:20,fontWeight:"bold"}}>₹ {value.usedProduct_Price}</p>
    </div>

    <form className='p-4' onSubmit={handleCart}> 

    <p className="card-text">
      {value.usedProduct_Details}
      </p>    
   
   
    <div className="row d-flex">

    </div>
    <NavLink key={key}  to={`/SingleProduct/${value.usedProduct_Id}`}>
 <input type="submit"   value="Add to cart" class="btn btn-primary"/>
</NavLink>
  
</form></div>
</div>
    
    )
}</li>
</ul>
  
</div>
<Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
        
</>
    );
}

export default ProductList;