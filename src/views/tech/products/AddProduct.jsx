import React, { useState } from 'react';
import {
  Heading,
  SimpleGrid,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
  // ... other necessary Chakra UI components
} from '@chakra-ui/react';


const Dashboard = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const openProductModal = () => {
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
  };

  const handleAddProduct = () => {
    // Implement functionality to add a new product (e.g., send data to backend)
    // Upon successful addition, close the modal
    closeProductModal();
  };

  return (
    <Box p={8}>
        <Box>
          <Button onClick={openProductModal} mb={4}>
            Add New Product
          </Button>
          {/* Product Modal */}
          <Modal isOpen={isProductModalOpen} onClose={closeProductModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add New Product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* Input fields for product details */}
                <Input placeholder="Color" mb={4} />
                <Input placeholder="Length" mb={4} />
                <Textarea placeholder="Description" mb={4} />
                <Input placeholder="Price" mb={4} />
                {/* Add more fields as needed */}
                <Button onClick={handleAddProduct} colorScheme="teal">
                  Add Product
                </Button>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
    </Box>
  );
};

export default Dashboard;
