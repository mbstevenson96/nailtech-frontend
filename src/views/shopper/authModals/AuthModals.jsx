import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import * as authService from '../../../authService.jsx'; // Import authService

const AuthModals = ({
  showLoginModal,
  showSignupModal,
  toggleLogInModal,
  toggleSignUpModal,
}) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const [signupCredentials, setSignupCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await authService.login(loginCredentials); // Call login function from authService
      // Optionally, handle successful login (redirect, set state, etc.)
      toggleLogInModal(); // Close the login modal
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async e => {
    e.preventDefault();
    try {
      await authService.signup(signupCredentials); // Call signup function from authService
      // Optionally, handle successful signup (redirect, set state, etc.)
      toggleSignUpModal(); // Close the signup modal
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error);
    }
  };

  return (
    <>
      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={toggleLogInModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleLogin}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={loginCredentials.email}
                    onChange={e =>
                      setLoginCredentials({
                        ...loginCredentials,
                        email: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={loginCredentials.password}
                    onChange={e =>
                      setLoginCredentials({
                        ...loginCredentials,
                        password: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Login
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={showSignupModal} onClose={toggleSignUpModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSignup}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={signupCredentials.email}
                    onChange={e =>
                      setSignupCredentials({
                        ...signupCredentials,
                        email: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={signupCredentials.password}
                    onChange={e =>
                      setSignupCredentials({
                        ...signupCredentials,
                        password: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Sign Up
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModals;
