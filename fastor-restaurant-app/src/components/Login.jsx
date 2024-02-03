

import React, { useEffect, useState } from 'react';
import  styles from '../components/Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const [mobileNumber, setMobileNumber] = useState('');
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const handleLogin = async()=>{
		try{
			if(mobileNumber.length==10){
				const res = await axios.post(
					`https://staging.fastor.in/v1/pwa/user/register`,
					{
					  phone: Number(mobileNumber),
					  dial_code: "+91", 
					}
				  );
				  if (res.data.status_code === 200) {
					setIsLoggedIn(true);
				  } else {
					alert("Registration failed");
				  }
			}else{
				alert('Enter correct mobile number');
			}
		} catch(error){
			alert("Something went wrong");
		}
		
	}

	useEffect(()=>{
		if(isLoggedIn){
			navigate("/otpinput", { state: { phoneNumber: mobileNumber } });
		}
	},[isLoggedIn,mobileNumber,navigate])
  return (
		<div className={styles.container}>
			
			<div className={styles.box}>
				<h2>Enter Your Mobile Number</h2>
				<p style={{fontWeight:'normal'}}> We will send you the 4 digit verification code</p>
				<input type="number" placeholder="Enter Your Mob No" onChange={(e)=>setMobileNumber(e.target.value)}  />
				<button type="button" class="btn btn-primary" onClick={handleLogin}>
					Send Code
				</button>
			</div>
		</div>
	);
}

export default Login