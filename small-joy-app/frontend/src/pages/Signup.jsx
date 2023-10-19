import React, { useState } from 'react';
import { Input, Button, Box, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignUp=()=>{
    
  }

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        SignUp
      </Heading>
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </FormControl>
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
        <Button type="submit" colorScheme="blue" mt={4}  onClick={handleSignUp}>
          SignUp
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
