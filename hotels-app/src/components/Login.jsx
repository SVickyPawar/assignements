

import React, { useState } from 'react';
import  styles from '../components/Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [mobileNumber, setMobileNumber] = useState('');
	const handleLogin = ()=>{
		if(mobileNumber.length==10){
			navigate('/otpinput')
		}else{
			alert('Enter correct mobile number');
		}
	}
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