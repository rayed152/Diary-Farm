import React, {useState} from 'react';
import './Login.css'; 
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response)=>{
      if(response.data.message){
        //sessionStorage
        setLoginStatus(response.data.message); 
      }else{
        setLoginStatus(response.data[0].username)
        navigate("/home")
      }
    })
  }

  return (
    <div>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome To Dairy Farm</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e)=> {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=> {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p>{loginStatus}</p>
          <div className="d-grid gap-2 mt-3">
            <button
            tton type="submit" className="btn btn-primary"
            onClick={login}
            >
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
          <p className="forgot-password text-right mt-2" >Don't have an account<br></br>
                <a href="./Register">Sign up </a> here</p>
        </div>
      </form>
    </div>     
    </div>
  );            
}

export default Login;




{/* <div className="content">
        
        <div className="text">
        
        </div>
            <div className="form">
                <h2>Login Here</h2>
                <input type="text"  placeholder="Username" 
                onChange={(e)=> {
                 setUsername(e.target.value);
               }}
               />
                <input type="password"  placeholder="Password"
                onChange={(e)=> {
                 setPassword(e.target.value);
               }}
                />
                <p>{loginStatus}</p>
                <button className='btnn' onClick={login}>
                 Login
               </button>

                <p className="link">Don't have an account<br></br>
                <a href="./Register">Sign up </a> here</p>
                <p className="liw">Log in with</p>

                {/* <div className="icons">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                </div> */}
            //  </div>
        //  </div> 