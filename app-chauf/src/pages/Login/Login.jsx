import "./Login.scss";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { paperClasses } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {

  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const pass = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
    setShowPassword("password");
  }
  }
  

  const navigate = useNavigate();
  const Auth = async() => {
    try {
      await axios.post('https://qlogisticsapp.herokuapp.com/AuthAPI/loginD', {
            email: email,
            password: pwd
        }).then(res => {
          console.log(res.data.message)
            if (res.data) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.details.name);
                localStorage.setItem('id', res.data.details._id);
                
                axios.get(`https://qlogisticsapp.herokuapp.com/VehiculeAPI/single?id=${res.data.details._id}`).then(res=>{
                  console.log(res.data.vehicule._id)
                  localStorage.setItem('vehicule', res.data.vehicule._id);
                }
                )
                navigate(`/home`);
            } else {
                alert('Invalid email or password');
            }
        });

        
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        }
    }
}
  
    return (
        <div className="login-content"> 
      
  <div className="screen-1">

  
    <img src="%PUBLIC_URL%../../../logo.png" className="logo"/>
 
  <label for="email" className="label">Email Address</label>
    <div className="email">
    
      <div class="sec-2">
      <EmailIcon className="iconlogin" sx={{ fontSize: 40 }}/>
        <input type="email"  placeholder="Username@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
      </div>
    </div>
    <label for="password" className="label">Password</label>
    <div className="password">
      
      
      <div class="sec-2">
      <LockIcon className="iconlogin" sx={{ fontSize: 40 }}/>
        <input  id ="myInput" type={showPassword} name="password" onChange={(e) => setPassword(e.target.value)}placeholder="password" />
        <VisibilityIcon className="iconeye" sx={{ fontSize: 40 }} onClick={pass}/>
        
      </div>
    
    </div>
   
    <button type="submit" className="login" onClick={()=>Auth()}>Log in </button>
   
  </div>
        </div>
     );

}
export default Login;