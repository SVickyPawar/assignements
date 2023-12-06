import React from 'react';
import {Text,Button,Icon} from '@chakra-ui/react';
import { FaRegHeart } from "react-icons/fa";

const CarousalCard = () => {
  return (
    <div className='w-48 h-[440px] border-2 border-red-300'>
        <div className='w-full h-[135px] bg-gray-200 rounded'>
            <img src="https://images.unsplash.com/photo-1551887558-68148b03eb90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover w-1/2 h-full m-auto'/>
        </div>
        <div className='mx-2'>
            <Text className='font-medium leading-tight'>Robinson Summer Fruits No Added Sugar 1 Litre </Text>
            <p className='text-sm mt-1 text-gray-400'>4119043</p>
            <Text className='mt-3 text-2xl font-semibold'>$0.83/each</Text>
            <span className='mt-4 flex text-sm text-teal-400'><Text className='font-medium leading-tight mr-2'>Saving % </Text> 4.60</span>
            <span className='flex text-sm'><Text className='font-medium leading-tight mr-2'>Supplier </Text> Supplier</span>
            <span className='flex text-sm'><Text className='font-medium leading-tight mr-2'>Delivery by </Text>24-Jan-2022</span>
        </div>
        <div className='flex justify-between mx-2 mt-2'>
            <Button className='flex gap-4 px-8 w-3/4'> <span>-</span>1 <span>+</span></Button>
            <Button className='flex gap-4 px-3 w-1/4 ml-4 '  colorScheme='teal' variant='outline' >
            <Icon as={FaRegHeart} color='teal'  />
					 </Button>
        </div>
        <div className=' mx-2 mt-2'>

        <Button className=' w-full ' colorScheme='teal' variant='solid'>Add To Cart</Button>
        </div>
    </div>
  )
}

export default CarousalCard