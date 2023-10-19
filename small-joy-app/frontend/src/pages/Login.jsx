import React, { useContext, useState } from 'react';
import { Input, Button, Box, FormControl, FormLabel, Heading,Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { isAuthorized, setIsAuthorized } = useContext(AuthContext);
    const [loginCred, setLoginCred] = useState([]);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("check login");
        fetch("http://localhost:8080/notes/user")
            .then((res) => res.json())
            .then((data) => {
                setLoginCred(data);
                const isLoginValid = data.some((el) => el.username === form.username && el.password === form.password);
                if (isLoginValid) {
                    console.log("Login successful");
                    setIsAuthorized(true);
                    localStorage.setItem('isLoggedIn', JSON.stringify(true));
                    navigate("/Homepage");
                } else {
                    alert("Enter correct username and password");
                }
            });
    };

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
                <Button type="submit" colorScheme="blue" mt={4} onClick={handleLogin}>
                    Login
                </Button>
            </form>
            <Text>Don't have an acoount? <Link to="/signup">SignUp</Link> here.</Text>
        </Box>
    );
};

export default Login;
