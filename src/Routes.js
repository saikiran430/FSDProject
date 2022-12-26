import React from "react";
import Aboutus from "pages/Aboutus";
import Contactus from "pages/Contactus";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginContainer from "components/Container/LoginContainer";
import LoginForm from "components/Container/LoginForm";
import RegistrationForm from "components/Container/RegistrationForm";
import AddProduct from "components/Container/AddProduct";
import ProductList from "components/Container/ProductList";
import AddToCart from "components/Container/AddToCart";
import AdminLogin from "components/Container/AdminLogin";
import AdminDashboard from "components/Container/AdminDashboard";
import Payment from "components/Container/Payment";
import OrderStatus from "components/Container/OrdeStatus";
import SingleProduct from "../src/components/Container/SingleProduct";

const ProjectRoutes = () => {
  return (
    <>
    <LoginContainer/>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Register" element={<LoginForm/>} />
        <Route exact path='/Login' element={<RegistrationForm/>}></Route>  
        <Route exact path='/AddProduct' element={<AddProduct/>}></Route>  
        <Route exact path='/ProductList' element={<ProductList/>}></Route>  
        <Route exact path='/AddToCart' element={<AddToCart/>}></Route>  
        <Route exact path='/AdminLoginForm' element={<AdminLogin/>}></Route>  
        <Route exact path='/AdminDashboard' element={<AdminDashboard/>}></Route>  
        <Route exact path='/Payment' element={<Payment/>}></Route> 
        <Route exact path={`/SingleProduct/:id`} element={<SingleProduct/>}></Route> 
         
        <Route exact path='/OrderStatus' element={<OrderStatus/>}></Route>  
        
      </Routes>
    </Router>
    </>
  );
};

export default ProjectRoutes;
