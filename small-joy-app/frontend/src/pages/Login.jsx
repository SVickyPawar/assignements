import React, { useState } from 'react';
import { Input, Button, Box, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin=(e)=>{
    e.preventDefault();
    console.log("check login");
    fetch("http://localhost:8080/notes/user").then((res)=>res.json()).then(data=>console.log(data));
  }
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Login
      </Heading>
      <form>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}  onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
