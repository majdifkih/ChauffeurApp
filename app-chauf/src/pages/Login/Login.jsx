import "./Login.scss";
function Login() {

   
  
  
  
    return (
        <div className="login-content"> 
      
  <div className="screen-1">
  <div ClassName="logo">
  
    <img src="%PUBLIC_URL%../../../logo.png"/>
  </div>
  <label for="email">Email Address</label>
    <div className="email">
    
      <div class="sec-2">
      <ion-icon name="mail-outline"></ion-icon>
        <input type="email" className="email" placeholder="Username@gmail.com"/>
      </div>
    </div>
    <label for="password">Password</label>
    <div className="password">
      
      
      <div class="sec-2">
      <ion-icon className="lock-closed-outline"></ion-icon>
        <input  id ="myInput" type="password" name="password" placeholder="password"/>
        <ion-icon className="show-hide" name="eye-outline" onclick="myFunction()"></ion-icon>
      </div>
    
    </div>
   
    <button type="submit" className="login">Log in </button>
   
  </div>
        </div>
     );

}
export default Login;