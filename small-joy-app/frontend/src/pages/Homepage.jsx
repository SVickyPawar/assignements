import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from '../components/Card';

const Homepage = () => {
    const [data, setData] = useState([]);

    const fetchData = async() =>{
        let data= await fetch('http://localhost:8080/notes');
        let res=await data.json();
        setData(res)
    }
    useEffect(() => {
        fetchData();
        console.log("data",data)
    },[])
  return (
    <div>Homepage
         <Box p="4">
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {data.map((item, index) => (
          <Card key={index} title={item.title} content={item.note} />
        ))}
      </SimpleGrid>
      </Box>
    </div>
  )
}

export default Homepage