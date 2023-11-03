import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  const storedValue = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (storedValue === 'true') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [setIsAuthorized]);

  const handleLogin = () => {
    if (isAuthorized) {
      localStorage.setItem('isLoggedIn', 'false');
      setIsAuthorized(false);
      navigate('/');
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      setIsAuthorized(true);
    }
  };

  return (
    <Box
      as="nav"
      p="1rem"
      backgroundColor="lightblue" // Light background color
      color="white"
      display="flex"
      justifyContent="flex-end"
    >
      <Button
        onClick={handleLogin}
        backgroundColor="teal.400"
        _hover={{ backgroundColor: "teal.600" }}
        size="md" // Proper button sizing
      >
        {isAuthorized ? 'Logout' : 'Login'}
      </Button>
    </Box>
  );
};

export default Navbar;
