import React, { useEffect } from 'react'
import { useState } from 'react';

const Homepage = () => {
    const [data, setData] = useState([]);

    const fetchData = async() =>{
        let data= await fetch('http://localhost:8080/notes');
        let res=await data.json();
        console.log(res);
    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <div>Homepage</div>
  )
}

export default Homepage