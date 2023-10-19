import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  IconButton,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { EditIcon, ViewIcon, DeleteIcon } from '@chakra-ui/icons';

const Card = ({ id, title, content, deleteData,updateData }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenDetailsModal = () => {
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  const handleUpdateCard = () => {
    // Perform a PATCH (update) request to the API with the new data
    console.log(id)
    const updatedCard = {
        id,
        title: editedTitle,
        note: editedContent,
      };
  
      // Send a PATCH request to update the card using the provided updateCard function
      fetch(`http://localhost:8080/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCard),
      })
        .then((response) => response.json())
        .then((updatedData) => {
          // Call the updateCard function to update the card in your app state
           console.log(updatedData);
        updateData(updatedData);
          handleCloseEditModal();
        })
        .catch((error) => {
          console.error("Error updating card:", error);
        });
  };

  const handleDeleteCard = () => {
    // Perform a DELETE request to the API
    console.log("Deleting card");
    fetch(`http://localhost:8080/notes/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // The card was successfully deleted, you can perform further actions if needed
        // For example, remove the card from the UI
         // Call the deleteCard function to remove the card from the UI
         deleteData(id);
      } else {
        // Handle error if the DELETE request was not successful
        console.error("Error deleting card:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error deleting card:", error);
    });
    
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="2">
      <Stack spacing={2}>
        <Text fontWeight="bold">{editedTitle}</Text>
        {isDetailsModalOpen ? <Text>{editedContent}</Text> : <Text>{content.slice(0, 100)}</Text>}
        <Button onClick={handleOpenDetailsModal} colorScheme="blue">
          View Details
        </Button>
        <Stack direction="row" spacing={2}>
          <IconButton
            aria-label="Edit"
            icon={<EditIcon />}
            colorScheme="teal"
            onClick={handleOpenEditModal}
          />
          <IconButton
            aria-label="Delete"
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={handleDeleteCard}
          />
        </Stack>
      </Stack>

      <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Card</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <Textarea
              placeholder="Content"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              mt={4}
            />
            <Button colorScheme="teal" mt={4} onClick={handleUpdateCard}>
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isDetailsModalOpen} onClose={handleCloseDetailsModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold">{editedTitle}</Text>
            <Text>{editedContent}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Card;
