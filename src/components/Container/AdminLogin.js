import React, {useState, useEffect, useRef} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import RegistrationForm from './registrationForm';
import {  
   
  Link, useNavigate  
} from 'react-router-dom';  
import axios from 'axios'; 
import AddProduct from './AddProduct';



const AdminLoginForm=()=> {

  const navigates=useNavigate();

    const userRef=useRef();
     const errRef=useRef();

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);
    const admin=[
      {
        User_Password:"admin123",
        Email:"admin123@gmail.com"
      }
    ]
       
    const handleSave=(e)=>{

      e.preventDefault();
      setEmail('');
      setPassword('');
     
      console.log(password,email);
   const data={
        User_Password :password,
        Email :email,
      }
  
      const user=admin.find(x=>x.Email==data.Email && x.User_Password==data.User_Password);

      if(!user){
  return setErrMsg("Email or password is wrong!");
      }else{
         setSuccess(true);
       navigates("/AdminDashboard");
      }
    }
       
      

return(
<>{/* {success? (

<AddProduct/>
):( */}
      <div className=' d-flex justify-content-center container-sm' >
      {/* */}

    <div className="main col-9 row" >
    <div className="col-6 bg-img ">

    </div>

    <div className="col-6  border-dark">

   
    <form className=" form m-2 bg-light p-4" onSubmit={handleSave} >

<br />
<br />
<br />
<br /><div className="d-flex justify-content-center" style={{fontSize:22}}>
    <h1>Admin Login</h1>
  </div>
<div className="form-group d-flex align-items-start">
<section>
        <p ref={errRef} className={errMsg? "errmsg":"offScreen"} aria-live="assertive">{errMsg}</p>
      </section>
    <label htmlFor="exampleDropdownFormEmail2">Email </label><br />
    </div>
    <div>


    <input type="email"
     ref={userRef}
      className="form-control"
       onSubmit={handleSave}
        id="exampleDropdownFormEmail2" 
        placeholder="example@email.com"
         onChange={(e)=>setEmail(e.target.value)} required/>


  </div>
  <br />
  <div className="form-group d-flex align-items-start">
    <label htmlFor="exampleDropdownFormPassword2">Password </label><br/>
    </div>
    <div>


    <input type="password" 
    value={password}
     ref={userRef} 
     className="form-control" 
     onSubmit={handleSave} 
    id="exampleDropdownFormPassword2" 
    placeholder="Password" 
    onChange={(e)=>setPassword(e.target.value)} required/>


    </div>
  
    {/* <Link to="/AdminDashboard"> */}
  <button type="submit" style={{width:460,height:40}} className="btn btn-primary">Sign in</button><br/>
  
  {/* </Link> */}
  <div className="form-group">
  <div className="form-check d-flex align-items-start">
  
  </div>
  </div>
  

</form> 
    </div>
</div>
      </div>
    
      </>     
    );
}

export default AdminLoginForm;