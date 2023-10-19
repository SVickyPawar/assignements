import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const {isAuthorized,setIsAuthorized}=useContext(AuthContext);
    const handleLogin=()=>{
        console.log("Logintrue",isAuthorized)
        if(isAuthorized==true){
            console.log("logout ");
            navigate("/")
        }else{
            console.log("login");
        }
        
    }
  return (
    <div>
        <button onClick={handleLogin}>{isAuthorized?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar