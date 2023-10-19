import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from "react-router-dom";
import { Box, Flex, Text, } from "@chakra-ui/react";



function App() {
  return (
    
    
      <Box className="App" p={{ base: "1rem", md: "2rem", lg: "3rem" }}>
        <Flex flexWrap="wrap" justifyContent={{ base: "center", md: "space-between" }}>
          <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold">Note-Taker</Text>
          <Navbar />
        </Flex>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Box>
    
  );
}

export default App;
