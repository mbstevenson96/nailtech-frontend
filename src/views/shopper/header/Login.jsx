import React, { useState } from 'react';
import LoginForm from '../../../components/LoginForm/LoginForm';
import {
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Login = (props) => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p={4} m="auto" mt={8}>
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Login
      </Heading>
      <Stack spacing={3}>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </Stack>
    </Box>
  );
};

export default Login;

