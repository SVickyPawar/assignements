import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from './Otp.module.css';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../ContextApi/AuthContextProvider';

function Otp() {
  const navigate =useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const phoneNumber = location?.state?.phoneNumber || "";
  const { auth, login } = useContext(AuthContext);

 

  const correctOtp = '123456'; // Set the correct OTP value

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async() => {
    if (otp.join("") === "123456") {
      try {
        const res = await axios.post(
          `https://staging.fastor.in/v1/pwa/user/login`,
          {
            phone: Number(phoneNumber),
            otp: 123456,
            dial_code: "+91",
          }
        );
        if (res.status === 200) {
          login(res.data.data.token);
          navigate("/restaurants");
        } else {
          alert("Login failed");
        }
      } catch (error) {
        alert("Something went wrong");
      }
    } else {
      alert("Incorrect OTP");
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className={styles.containerOtp}>
      <div className={styles.boxOtp}>
        <h2>OTP Verification</h2>
        <p style={{ fontWeight: 'normal' }}>
          Enter the verification code we just sent to your Mobile Number.
        </p>
        <div className={styles.inputBox}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyUp={(e) => handleBackspace(e, index)}
              maxLength="1"
            />
          ))}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Verify OTP
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

export default Otp;
