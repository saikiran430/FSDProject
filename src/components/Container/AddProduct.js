import React, { useEffect,useState} from 'react';
import image from "../images/img1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import* as Icon from 'react-bootstrap-icons';
import NavBar from './NavBar';
import Footer from 'components/Footer/Footer';
import ProductList from './ProductList';

import {useNavigate} from "react-router-dom";
const AddProduct =()=>{
    const[name,setName]=useState('');
    const[details,setDetails]=useState('');
    const[price,setPrice]=useState('');
    const[image,setImage]=useState('');
    const[UserId,setUserId]=useState('');
    const[success,setSuccess]=useState(false);
 const navigate=useNavigate();
   const handleSave=(e)=>{
    e.preventDefault();
    console.log();
    const data={
       UsedProduct_Name:name ,
       UsedProduct_Details :details,
       UsedProduct_Price :price,
       UsedProduct_UserId :UserId,
       UsedProduct_Image :image
    }

const BaseUrl="https://localhost:7012/api/UsedProduct/PostProduct";

    axios.post(BaseUrl,data).then((result)=>{
        const dt=result.data;
        setSuccess(true);
       console.log(dt);
        return setSuccess(true); ;
      }).catch((error)=>{
        console.log(error);
      })
    }

    useEffect(()=>{
      if(success==true){
       navigate("/ProductList")
      }},[success]);
    return(
<>
<NavBar/>
        <div className='product table d-flex justify-content-center shadow-lg rounded' style={{ backgroundImage:`url(${"data:image/jpeg;base64,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"})`, 
         backgroundSize:"200%",height: "100vh", backgroundposition: "100% 0", backgroundrepeat: "no-repeat" }} >
             
             <div className="bg-light mt-4 mb-4 rounded shadow-lg" style={{width:350,marginBottom:500}}>
            
            <h1 align="center"  className='mb-2 pb-4 rounded' style={{backgroundColor:"powderblue",fontSize:33}} >Add Product</h1>
           
            <form className='p-4' onSubmit={handleSave}> 

            <input  type="text" placeholder='Product Name' className='inputBox border rounded' onChange={(e)=>setName(e.target.value)} required/>

            <input type="text" placeholder='Product Description' className='inputBox border rounded' onChange={(e)=>setDetails(e.target.value)} required/>
            
            <input type="Number" placeholder='Product Price' style={{width:304}} className='mb-4 inputBox border rounded' onChange={(e)=>setPrice(e.target.value)} required/> 
            
            <input type="file"   className='mb-4 inputBox border rounded' style={{width:304}} onChange={(e)=>setImage(e.target.value)}  required/>
           
            <input type="Number" placeholder='User Id' style={{width:304}} className='mb-4 inputBox border rounded' onChange={(e)=>setUserId(e.target.value)} required/> 
            <div className='row col-6' style={{width:304}}>
{/*             
            {
              success? (
            <Link to="/ProductList"><input align="left" type="submit" className='btn btn-primary justify-content-center text-dark d-flex ' style={{alignItem:"center",textAlign:"center",width:200,marginLeft:30,height:50}} 
            value="Go to ProductList"/></Link> */}
              <input align="left" type="submit" className='btn btn-primary justify-content-center text-dark d-flex ' style={{alignItem:"center",textAlign:"center",width:200,marginLeft:30,height:50}} 
              value="Add Product"/>
            
           <Link to="/homepage" className='ml-4  justify-content-center text-dark  '  style={{width:20}}>
          <Icon.ArrowLeft color="royalblue" size={56}/>
            </Link>
            </div>
         
           </form>
         </div>
        </div>
        <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]"/>
        </>
    )
}

export default AddProduct;