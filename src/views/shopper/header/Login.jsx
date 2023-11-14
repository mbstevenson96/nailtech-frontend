import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login with:', email, password);
    // add authentication logic using state management/API calls here
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p={4} m="auto" mt={8}>
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Login
      </Heading>
      <Stack spacing={3}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <FormHelperText>Must be at least 8 characters.</FormHelperText>
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
