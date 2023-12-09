import { useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../../services/authService';

const LoginFormModal = ({
  showLoginModal,
  setShowLoginModal,
}
) => {

  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  });
  const [message, setMessage] = useState([''])
  const [user, setUser] = useState(authService.getUser())


  const navigate = useNavigate();
  
  const updateMessage = msg => {
    setMessage(msg)
  }

  const handleChange = e => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      handleSignupOrLogin();
      navigate('/shopper/nailtechs');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form autoComplete="off" onSubmit={handleSubmit}>
          <p>{message}</p>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  autoComplete="off"
                  value={formData.pw}
                  name="pw"
                  onChange={handleChange}
                />
              </FormControl>
              <Button type="submit" colorScheme="teal" border='none'>
                Log In
              </Button>
              <Link to="/">
                <Button onClick={() => setShowLoginModal(false)}>Cancel</Button>
              </Link>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginFormModal;
