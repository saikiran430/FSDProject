import React, {useState,setState,useEffect} from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  
  Link  
} from 'react-router-dom';
import axios from 'axios';  
import {useNavigate} from "react-router-dom";
function RegistrationForm() {
    const [success,setSuccess]=useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [mobile_no, setMobile_No] = useState('');
    const [address, setAddress] = useState('');
    const [pincode,setPincode] = useState('');
      const navigate=useNavigate();


    const handleSave=(e)=>{

      e.preventDefault();

      console.log(firstName,lastName,password,email,address,pincode,mobile_no);

      const data={
        First_Name :firstName,
        Last_Name :lastName,
        User_Password :password,
        Email :email,
        Mobile_No :mobile_no,
        Address :address,
        Pincode :pincode
      }
const BaseUrl="https://localhost:7012/api/Users";

      axios.post(BaseUrl,data).then((result)=>{
          const dt=result.data;
          setSuccess(true);
          console.log(dt);
          return setSuccess(true);
        }).catch((error)=>{
          console.log(error);
        })
      }


      useEffect(()=>{
        if(success==true){
         navigate("/AddProduct")
        }},[success]);


    return(
      
      <div className='border d-flex justify-content-center  pb-4' >
      {/* */}

<div className="main col-12 row pb-4" >
    <div className="col-6 bg-img">
    </div>
    <div className="col-6 border border-dark pb-6">


    <form className=" form m-2 bg-light" onSubmit={handleSave} style={{height:'auto'}}>

  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormfname2">FirstName </label><br/>
    </div>
    <div>
    <input type="text" className="form-control" id="exampleDropdownFormfname2" placeholder="FirstName" onChange={(e)=>setFirstName(e.target.value)} required/>
  </div>

  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormflname2">LastName </label><br/>
    </div>
    <div>
    <input type="text" className="form-control" id="exampleDropdownFormlname2" placeholder="LastName" onChange={(e)=>setLastName(e.target.value)} required/>
  </div>

<div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormEmail2">Email </label><br/>
    </div>
    <div>
    <input type="text" className="form-control" id="exampleDropdownFormEmail2" placeholder="example@email.com" onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
  
  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormPassword2">Password </label><br/>
    </div>
    <div>
    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
  
    <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormphone2">Phone</label><br/>
    </div>
    <div>
    <input type="text" className="form-control" id="exampleDropdownFormphone2" placeholder="Phone No" onChange={(e)=>setMobile_No(e.target.value)} required />
  </div>
  <br />
  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormphone2">Address</label><br/>
    </div>
    <div>
    <input type="textArea" className="form-control" id="exampleDropdownFormaddress2" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} required/>
  </div>
  <br />
  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormphone2">Pincode</label><br/>
    </div>
    <div>
    <input type="text" className="form-control" id="exampleDropdownFormpincode2" placeholder="Pincode" onChange={(e)=>setPincode(e.target.value)} required/>
  </div>
  <br />

   
  <button type="submit" className="btn btn-primary">
     Register</button>
   
   <br/>
  <p>Already have account! <Link to="/Register"style={{color:"blue",textDecoration:"underline"}}>Login here!</Link> </p> 
</form> 
    </div>
</div>
      </div>
        
    )
}

export default RegistrationForm;