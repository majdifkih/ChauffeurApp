import "./Login.scss";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Login() {

   
  
  
  
    return (
        <div className="login-content"> 
      
  <div className="screen-1">

  
    <img src="%PUBLIC_URL%../../../logo.png" className="logo"/>
 
  <label for="email">Email Address</label>
    <div className="email">
    
      <div class="sec-2">
      <EmailIcon className="iconlogin" fontSize="small"/>
        <input type="email"  placeholder="Username@gmail.com"/>
      </div>
    </div>
    <label for="password">Password</label>
    <div className="password">
      
      
      <div class="sec-2">
      <LockIcon className="iconlogin" fontSize="small"/>
        <input  id ="myInput" type="password" name="password" placeholder="password"/>
        <VisibilityIcon className="iconlogin" fontSize="small"/>
        
      </div>
    
    </div>
   
    <button type="submit" className="login">Log in </button>
   
  </div>
        </div>
     );

}
export default Login;