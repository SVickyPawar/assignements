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

const Card = ({ title, content }) => {
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
            onClick={() => {
              // Handle delete action here
            }}
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
            <Button colorScheme="teal" mt={4} onClick={handleCloseEditModal}>
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
