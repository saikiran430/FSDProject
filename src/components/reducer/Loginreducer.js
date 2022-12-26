const LoginReducer=({state,action})=>{
    switch (action.type) {
        case "LOGIN_API":
        return {
...state,
isToken:true,
user:action.payload
        }
        case "LOGIN_ERROR":
            return{
                ...state,
                isToken:false,
                isError:true
            }
        default:
            return  state;
};
}

export default LoginReducer;