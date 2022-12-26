import React, {useState, useEffect, useRef, useContext} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  
   
  Link, useNavigate  
} from 'react-router-dom';  
import axios from 'axios'; 
import { LoginProvider, useLoginContext } from 'components/Context/LoginContext';


const LoginForm=()=> {

  const navigates=useNavigate();
   const userRef=useRef();
     const errRef=useRef();
     const[ token, setToken] = useState('');
    
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);
const loginStorage={
  token:token
}
    useEffect(()=>{
      userRef.current.focus();
    },[]);

    useEffect(()=>{
      setErrMsg('');

    },[email,password]);


    const handleSave=(e)=>{

      e.preventDefault();
      setEmail('');
      setPassword('');
      
      console.log(password,email);

      const data={
        User_Password :password,
        Email :email,
      }
         const BaseUrl="https://localhost:7012/UserLogin";

      axios.post(BaseUrl,data ).then((result)=>{
        const token=result.data;
        console.log(token);
        return setSuccess(true);
     
      }).catch((error)=>{
        if(error.response=401){
          return setErrMsg("Email or password invalid!")
        }else if(error.response=404){
          return setErrMsg("User not found! Register yourself!")
        }else{
          return setErrMsg("server error! ");
        }
      })
    }
       
     useEffect(()=>{
      if(success===true){
         navigates("/ProductList");
      }
     }) 

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

    <section>
        <p ref={errRef} className={errMsg? "errmsg":"offScreen"} aria-live="assertive">{errMsg}</p>
      </section>
    <form className=" form m-2 bg-light p-4" onSubmit={handleSave} >

<br />
<br />
<br />
<br /><div className="d-flex justify-content-center" style={{fontSize:22}}>
    <h1>User Login</h1>
  </div>
  <div>
<p>{errMsg}</p>
  </div>
<div className="form-group d-flex align-items-start">
  
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
  
    {/* <Link to="/AddProduct"> */}
  <button type="submit" style={{width:460,height:40}} className="btn btn-primary">Sign in</button><br/>
  {/* </Link> */}
  <div className="form-group">
  <div className="form-check d-flex align-items-start">
  
  <p>New User? <Link to="/Login" style={{color:"blue",textDecoration:"underline"}}>Register Here!</Link></p>
  
  </div>
  </div>
  

</form> 
    </div>
</div>
      </div>
    
      </>     
    );
}

export default LoginForm;