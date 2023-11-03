import React from 'react';
import  styles from '../components/Login.module.css';

const Login = () => {
  return (
		<div className={styles.container}>
			
			<div className={styles.box}>
				<h2>Enter Your Mobile Number</h2>
				<p style={{fontWeight:'normal'}}> We will send you the 4 digit verification code</p>
				<input type="number" placeholder="Enter Your Mob No"  />
				<button type="button" class="btn btn-primary">
					Send Code
				</button>
			</div>
		</div>
	);
}

export default Login