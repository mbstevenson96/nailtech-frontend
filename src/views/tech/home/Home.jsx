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
  Center,
  ModalBody,
} from '@chakra-ui/react';
import Profile from './Profile';
import Reviews from './Reviews.jsx';
import AddProduct from '../products/AddProduct.jsx';
const ordersData = [
  { id: 1, customer: 'Customer 1', details: 'Order details 1' },
  { id: 2, customer: 'Customer 2', details: 'Order details 2' },
];

const reviewsData = [
  { id: 1, author: 'Customer 1', review: 'Great service!' },
  { id: 2, author: 'Customer 2', review: 'Loved the nails!' },
];
const Orders = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = order => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        Orders
      </Heading>
      {orders.map(order => (
        <Box key={order.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
          <Heading as="h3" size="sm" mb={2}>
            {order.customer}
          </Heading>
          <p>{order.details}</p>
          <Button mt={2} onClick={() => openModal(order)}>
            View
          </Button>
        </Box>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOrder && (
              <>
                <p>Customer: {selectedOrder.customer}</p>
                <p>Details: {selectedOrder.details}</p>
                {/* Include more order details here */}
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Your Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        <Box>
          <Center>
            <Profile />
          </Center>
        </Box>
        <AddProduct />{' '}
        <Box>
          <Orders orders={ordersData} />
        </Box>
        <Box>
          <Reviews reviewsData={reviewsData} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
