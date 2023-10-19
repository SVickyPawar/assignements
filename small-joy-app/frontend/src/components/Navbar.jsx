import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  const storedValue = localStorage.getItem('isLoggedIn');

  // When the component mounts, update the isAuthorized state based on local storage
  useEffect(() => {
    if (storedValue === 'true') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [setIsAuthorized]);

  const handleLogin = () => {
    if (isAuthorized) {
      // If the user is authorized, perform a logout action
      localStorage.setItem('isLoggedIn', 'false');
      setIsAuthorized(false); // Update the state using your context
      navigate('/');
    } else {
      // If the user is not authorized, perform a login action
      localStorage.setItem('isLoggedIn', 'true');
      setIsAuthorized(true); // Update the state using your context
    }
  };

  return (
    <Box
      as="nav"
      p="1rem"
      backgroundColor="teal.500"
      color="white"
      display="flex"
      justifyContent="flex-end"
    >
      <Button
        onClick={handleLogin}
        backgroundColor="teal.400"
        _hover={{ backgroundColor: "teal.600" }}
      >
        {isAuthorized ? 'Logout' : 'Login'}
      </Button>
    </Box>
  );
};

export default Navbar;
