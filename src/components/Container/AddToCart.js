import React,{useState,useEffect,useContext} from "react";
import NavBar from "./NavBar";
import Footer from "components/Footer/Footer";
import './Cart.css';
import { useParams } from "react-router";
import { useCartContext } from "components/Context/cart_Context";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
function AddToCart(){
    const{cartItem}=useCartContext();

   console.log(cartItem);
    const [success,setSuccess]=useState(false);
    const navigate=useNavigate(); 
const [cartItems,setCartItem]=useState([]);
    const [id,setId]=useState('');
    const [CartId,setCartId]=useState('');
   const params = useParams();
    const data={
        id:id,
        CartId:CartId,
    }

const{removeItem}=useCartContext();
    


useEffect(()=>{
    if(success==true){
       
        navigate("/AddToCart");
       }
})



    return(
        <>
        <NavBar/>
<div className="container-sm mt-4">

<div className="card ">
            <div className="row">
                <div className="col-sm-8 cart offset-2">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                        </div>
                    </div>    

              
               
<ul>
        <li className="row d-flex ">

                     {
        cartItem.map((value,key)=>
        <div>
                    <div className="row border-top border-bottom" key={key}>
                        <div className="row main align-items-center">
                            <div className="col-2 row">
                            
                            <img className="img-fluid" src="data:image/jpeg;base64,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"/>
                            </div>
                           
                            <div className="col">
                            
                                <div className="row text-dark p-2" style={{fontSize:20,backgroundColor:"#f0d3f8"}}>{value.Name}</div>
                                <div className="row">{value.Details}</div>
                            </div>
                           
                            <div className="col ">
                                <p>Quantity</p>
                              <p className="border d-flex justify-content-center">{value.quantity}</p> 
                            </div>
                            
                            <div className="col">₹ {value.price} <span className="close">&#10005;</span></div>
                            
                            
                          <div className="col"> 
                           
                                <FaTrash style={{width:45,height:45}}   className="btn btn-primary" onClick={()=>removeItem(value.adminCart_Id)}/>
                           
                            </div> 
                            
                        </div>
                    </div>
 </div>
                      )
    } 
    <div className="row col-12">
    <Link className="col" to="/Payment"> 
<button type="submit"  className="btn m-2 text-white" style={{width:200,height:40,fontSize:17,backgroundColor:"#a773d8"}}>Make Payment</button>
                        </Link>
                        <Link className="col" to="/ProductList"> 
<button type="submit"  className="btn m-2 text-white" style={{width:200,height:40,fontSize:17,backgroundColor:"#a773d8"}}>Continue Shopping</button>
                        </Link>

                        </div>
</li>
</ul>

</div>
        
       </div></div>
</div>
<Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
</>
    );
}


export default AddToCart;