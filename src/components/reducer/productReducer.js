const ProductReducer=(state,action)=>{
  switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
    
            };
            case "SINGLE_LOADING":
            return{
                ...state,
                isSingleLading:true,
    
            };

            case "MY_API_DATA":
              
                    const featureData=action.payload.filter((curElem)=>
                    {
                        return curElem;
                    }
                    );
                    return{
                        ...state,
                        isLoading:false,
                        products:action.payload,
                        products:featureData,
                    }
         case "SINGLE_API_DATA":
            return{
                 ...state,
                  isSingleLoading:false,
                   singleProduct:action.payload,
                   }
                
        case "API_LOADING":
             return{
            ...state,
            isLading:false,
            isError:true,
        };
        case "SINGLE_LOADING":
            return{
           ...state,
           isSingleLading:false,
           isError:true,
           
       };
    
        default:
            return  state;
    }
};
export default ProductReducer;