import React,{useEffect, useState} from "react";
import NavBar from "./NavBar";
import Footer from "components/Footer/Footer";
import image from '../images/img1.jpg';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './OrderStatus.css';
import Header from "components/Header/Header";
function OrderStatus(){

  const [Time,setTime]=useState();
  const data = {
    Time:new Date().toLocaleString(),
  }

  return(
    <>
    <NavBar/>
    
    <section className=" vh-100 gradient-custom-2">
      
  <div className="container py-1 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-10 col-lg-8 col-xl-6">
      <div className="d-flex justify-content-center bg-white rounded mb-2 pt-2" style={{width:345, height:40, fontSize:20}}><h1>Order Details</h1></div>
        <div className="card card-stepper" style={{borderRadius: 16}}>
          <div className="card-header p-4 mt-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mt-2">
                
                <p classNameName="text-muted mb-0  "> Place On <span classNameName="fw-bold text-body">{data.Time}</span> </p>
              </div>
              
            </div>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-row mb-4 pb-2">
              <div className="flex-fill">
              
                <p className="text-muted">Tracking Status on: <span className="text-body">{data.Time}</span></p>
              </div>
              
            </div>
            <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
              <li className="step0 active" id="step1"><span
                  style={{marginLeft: 22, marginTop: 12}}>PLACED</span></li>
              <li className="step0 text-center" id="step2"><span>SHIPPED</span></li>
              <li className="step0 text-muted text-end" id="step3"><span
                  style={{marginRight: 22}}>DELIVERED</span></li>
            </ul>
          </div>
          <div>
          <a className="btn btn-primary text-Dark mb-2"  href = {"/ProductList"}>Back to Products</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <Footer classNameName="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
  
    </>
  )
}
export default OrderStatus;