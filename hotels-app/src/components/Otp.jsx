import React, { useState, useRef, useEffect } from 'react';
import styles from './Otp.module.css';
import {useNavigate} from 'react-router-dom';

function Otp() {
  const navigate =useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

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

  const handleSubmit = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp === correctOtp) {
      setError(''); // Reset error message
      // Add your logic here when the OTP is correct (e.g., navigate to the next step)
      navigate('/restaurants')
    } else {
      setError('Incorrect OTP. Please try again.');
    }
  };

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
