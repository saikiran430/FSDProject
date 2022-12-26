import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Loginreducer";
import axios from "axios";
const LoginContext=createContext();

const initialState={
   
    isToken:"false",
isError:"false",
users:[]
}

const LoginProvider=({children})=>{
    const BaseUrl="https://localhost:7012/UserLogin";
 const [state,dispatch]=useReducer(reducer,initialState);
      
    const loginHere=(data)=>{

        axios.post(BaseUrl,data ).then((result)=>{
            const token=result.data;
            dispatch({type:"LOGIN_API",payload:token});
            console.log(token);
           
          }).catch((error)=>{
            dispatch({type:"LOGIN_API_ERROR"});
            
          });
    }
    return (

        <LoginContext.Provider value={{...state, loginHere}}>
            {children}
        </LoginContext.Provider>
    );
       
};

const useLoginContext=()=>{
    return useContext(LoginProvider);
}
export {LoginProvider,useLoginContext};