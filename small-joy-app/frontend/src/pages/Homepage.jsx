import { Box, SimpleGrid, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Textarea, Input, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [dataAdded, setDataAdded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newNote, setNewNote] = useState({ title: '', note: '' });

  const deleteData=(id)=>{
    console.log("id",id)
   
    setData(data.filter((el)=>{return el.id!==id}));
    setDataAdded(!dataAdded);
    
  }
 
  const updateData=(data)=>{
   
        
    console.log("updateData",data)
   

    
  }

  const fetchData = async () => {
    console.log('fetchData called');
    let response = await fetch('http://localhost:8080/notes');
    let res = await response.json();
    setData(res);
  }

  const handleAddNote = () => {
     fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newNote)
    }).then(response => response.json()).then(data => {
        console.log(data);
        setNewNote({ title: '', note: '' });
        setDataAdded(true);
        onClose();
    });
  }

  useEffect(() => {
    fetchData();
  }, [dataAdded]); 

  return (
    <div>
      Homepage
      <Box p="4">
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {data.map((item, index) => (
            <Card key={index} title={item.title} content={item.note} id={item._id} deleteData={deleteData} updateData={updateData} />
          ))}
        </SimpleGrid>
      </Box>
      <Button
        position="fixed"
        bottom="4"
        right="4"
        padding="4"
        onClick={onOpen}
        colorScheme="teal"
      >
        Add Note
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Title"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              mb={4}
            />
            <Textarea
              placeholder="Content"
              value={newNote.note}
              onChange={(e) => setNewNote({ ...newNote, note: e.target.value })}
              resize="none"
            />
            <Button mt={4} colorScheme="teal" onClick={handleAddNote}>
              Add
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Homepage;
