import React, { useState } from "react";

import {NavLink}from 'react-router-dom';
import { Column, Line, Row, Text, Img } from "components";
import { Link } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Container/AdminDashboard.css';
function AdminNavBar(states){
  const[success,setSuccess]=useState(false);
  
  const[Admin,setAdmin]=useState('');
  const[Users,setUsers]=useState('');
  

    return(

      <nav className="navbar navbar-expand-lg navbar-light nav shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><Img
                    src="images/Vintage Restyled Logo.png"
                    className="max-w-[545px] mx-[auto] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[15px] w-[100%]"
                    alt="nathanoakleyO"
                    style={{ width: '180px'}}
                  /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              <div >  <a className="nav-link tab2 p-2 m-2 active rounded" aria-current="page" href={"/homepage"} >
           Home
                </a></div>
    
            </li>
           
            <li className="nav-item "><a tabIndex="-1"  className="nav-link tab2 p-2 m-2 rounded" href={"/AdminDashboard"} id="navbarScrollingDropdown" role="button" >
              Dashboard
              </a>
            </li>
            
          </ul>
          
          
          <div>

          </div>
          <div align="center" className="rounded border d-flex pt-2 justify-content-center" style={{width:100,height:40,fontSize:15}}>
            <text className="">Hello Admin</text>
          </div>
        </div>
      </div>
    </nav>



    );

}

export default AdminNavBar;