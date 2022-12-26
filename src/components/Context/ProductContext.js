import { Children, createContext,useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/productReducer';
const AppContext=createContext();

const initialState={
    isLoadig:"false",
    isSingleLoadig:"false",
    isError:"false",
    singleProduct:{},
    products:[]
}
const AppProvider=({children})=>{
    const BaseUrl="https://localhost:7012/api/UsedProduct";
const [state,dispatch]=useReducer(reducer,initialState);
  
    const getProducts=()=>{
        
        dispatch({type:"SET_LOADING"});
   
axios.get(BaseUrl).then((result)=>{
         const products=result.data;
dispatch({type:"MY_API_DATA",payload:products});
           return console.log(products);
            }).catch((error)=>{
              console.log(error);
              dispatch({type:"API_ERROR"});
            })
        
    }
const getSingleProduct=(id)=>{
    dispatch({type:"SINGLE_LOADING"});
   
    axios.get(`https://localhost:7012/api/UsedProduct/${id}`).then((result)=>{
        const singleProduct=result.data;
dispatch({type:"SINGLE_API_DATA",payload:singleProduct});
    }).catch((error)=>{
        dispatch({type:"SINGLE_ERROR"});
    })
}

    useEffect(()=>{
getProducts();
     },[]);
        
   

   
    return (

<AppContext.Provider value={{...state,getSingleProduct}}>
    {children}
</AppContext.Provider>

    );
};

export {AppProvider,AppContext};