import React, { useState, useRef, useEffect } from 'react';
import styles from './Otp.module.css';

function Otp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

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

  return (
    <div className={styles.containerOtp}>
			
			<div className={styles.boxOtp}>
				<h2>OTP Verification</h2>
				<p style={{fontWeight:'normal'}}> Enter the verification code we just sent on your Mobile Number.</p>
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
				<button type="button" class="btn btn-primary">
					Send Code
				</button>
			</div>
		</div>
    // <div>
    //   {otp.map((digit, index) => (
    //     <input
    //       key={index}
    //       ref={(ref) => (inputRefs.current[index] = ref)}
    //       type="text"
    //       value={digit}
    //       onChange={(e) => handleChange(e, index)}
    //       onKeyUp={(e) => handleBackspace(e, index)}
    //       maxLength="1"
    //     />
    //   ))}
    // </div>
  );
}

export default Otp;
