import React,{useEffect, useState} from "react";
import NavBar from "./NavBar";
import Footer from "components/Footer/Footer";
import image from '../images/img1.jpg';
import axios from "axios";
import { Paypal } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import './Payment.css';
import { Alert } from "bootstrap";

import {useNavigate} from "react-router-dom";
function Payment(){
    const[success,setSuccess]=useState(false);

    const [products,setProducts]=useState([]);
    const [id,setId]=useState('');
    const navigate=useNavigate();
    const data={
id:id
    }
    const BaseUrl="https://localhost:7012/api/UsedProduct";
    
    const handleSave=(e)=>{
   e.preventDefault();
        axios.get(`https://localhost:7012/api/UsedProduct/${id}`).then((result)=>{
       
       

        setProducts(result.data); 
          return  console.log(products);
            
           }).catch((error)=>{
             console.log(error);
           })
         }


         const handlePay=()=>{
            setSuccess(true);
         }
     useEffect(()=>{
   if(success==true){
    alert("Hurray! Your payment is done")
    navigate("/OrderStatus");
   }},[success]);
   return(
    <>
    <NavBar/>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt=""/>
                    </div>
                    <div class="number">
                        <label class="fw-bold" for="">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                      
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                            alt=""/>
                    </div>
                    <div class="number">
                        <label class="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-3">
                <div class="card p-3">
                    <div class="img-box">
                        <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                            alt=""/>
                    </div>
                    <div class="number">
                        <label class="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <small><span class="fw-bold">Expiry date:</span><span>10/16</span></small>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="card p-3">
                    <p class="mb-0 fw-bold h4">Payment Methods</p>
                </div>
            </div>
            <div>

            </div>
            <div class="col-12">
                <div class="card p-3">


                    
                    <div  class="card-body border p-0">
                        <p>
                            <a  class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span class="fw-bold">Credit Card</span>
                                <span class="">
                                    <span class="fab fa-cc-amex"></span>
                                    <span class="fab fa-cc-mastercard"></span>
                                    <span class="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        
                        
                        <div class="collapse show p-3 pt-0 " id="collapseExample">
                            <div class="row d-flex justify-content-center"> 
                                                      
                                {/* onSubmit={handlePayment} */}
                                <div class="col-lg-7">
                                    <form action=""  class="form">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" " maxLength={16} minLength={16} required/>
                                                    <label for="" class="form__label">Card Number</label>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" " maxLength={3} minLength={3}required/>
                                                    <label for="" class="form__label">MM / yy</label>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form__div">
                                                    <input type="password" class="form-control" placeholder=" " required/>
                                                    <label for="" class="form__label">cvv code</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" " required/>
                                                    <label for="" class="form__label">name on the card</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <input type="submit" onClick={handlePay} value="Make Payment"  class="btn btn-primary w-100"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                
                </div>
            </div>
           
        </div>
    </div>

    <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
</>
    )
}
export default Payment;