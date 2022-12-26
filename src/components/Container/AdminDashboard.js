import React, { useState,useEffect } from 'react';
import image from "../images/img1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import* as Icon from 'react-bootstrap-icons';
import NavBar from './NavBar';
import AdminNavBar from './AdminNavBar';
import Footer from 'components/Footer/Footer';
import './AdminDashboard.css';
import {useNavigate} from "react-router-dom";
function AdminDashboard()
{
    const [products,setProducts]=useState([]);
    const [usedProduct_Id,setUsedProduct_Id]=useState('');
    const BaseUrl="https://localhost:7012/api/UsedProduct";
    const BaseDelete="https://localhost:7012/api/UsedProduct/";
   const [success,setSuccess]=useState(false);
   const navigate=useNavigate(); 
  //  const handleCart=()=>{
   
  //       axios.get(BaseUrl).then((result)=>{
         
  //       setProducts(result.data); 
  //         return  console.log(products);
            
  //          }).catch((error)=>{
  //            console.log(error);
  //          })
  //        }


         const data={
          UsedProduct_Id :usedProduct_Id
         }


const handleDelete=(e)=>{
 e.preventDefault();
 const id =data.UsedProduct_Id;
 
 console.log(id);
 
     axios.delete(`https://localhost:7012/api/UsedProduct/${id}`).then((result)=>{
         
      const dt=result.data;
      setSuccess(true);
        return  console.log(`Product deleted successfuly!${id}`);
          
         }).catch((error)=>{
           console.log(error);
         })
}

useEffect(()=>{
 
 const id =data.UsedProduct_Id;
 
 console.log(id);
 
 axios.get(BaseUrl).then((result)=>{
         
  setProducts(result.data); 
    return  console.log(products);
      
     }).catch((error)=>{
       console.log(error);
     })
   

  if(success==true){
   navigate("/AdminDashboard")
  }},[success]);

   return(
    
    <>
    <AdminNavBar  states="true"/>
       {/* onClick={handleCart} */}

    <ul>
        <li className="row d-flex ">
{
    products.map((value,key)=>
    <div key={key} class="card mb-4 mr-4 shadow-sm" style={{width: 250}}>
  <img className="card-img-top" src={image} alt="Card image cap"/>
  <div className="card-body">
  <form className='p-4' onSubmit={handleDelete}> 
  
<input type="text" value={value.usedProduct_Id} onChange={(e)=>setUsedProduct_Id(e.target.value)}/>
        <h1 className="card-title" style={{fontSize:23,fontWeight:"bold"}}>{value.usedProduct_Name}</h1>
        <div className="row">
       <p style={{fontSize:20,color:"green"}}>Price</p> <p style={{fontSize:20,fontWeight:"bold"}}>₹ {value.usedProduct_Price}</p>
    </div>
    <p className="card-text">{value.usedProduct_Details}</p>
    <div className="row d-flex">
      </div>
    <button type="submit" onChange={(e)=>setUsedProduct_Id(value.usedProduct_Id)} className="btn btn-danger text-dark">Unwanted? Delete!</button>
</form>
   </div>
</div>
   
    )
}</li>
</ul>
   <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
  </>

   );
}

export default AdminDashboard;