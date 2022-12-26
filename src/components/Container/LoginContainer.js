import {  
    BrowserRouter as Router ,  
    Routes,  
    Route,  
    Link  
}   
from 'react-router-dom';  

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function LoginContainer(){
    return (  
        <Router>  
       
        <Routes>  
               {/* <Route exact path='/Login' element={<RegistrationForm/>}></Route>  
              <Route exact path='/Register' element={< LoginForm />}></Route>   */}
       </Routes>  
        
    </Router>  
    );  
}
export default LoginContainer;