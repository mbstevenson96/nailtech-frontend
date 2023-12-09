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
import * as authService from '../../../services/authService'

const SignupFormModal = ({
  showSignupModal,
  setShowSignupModal,
}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  });
  const [message, setMessage] = useState([''])
  const [user, setUser] = useState(authService.getUser())


  const [photoData, setPhotoData] = useState({});

  const updateMessage = msg => {
    setMessage(msg)
  }

  const handleChange = e => {
    updateMessage('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePhoto = evt => {
    setPhotoData({ photo: evt.target.files[0] });
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await authService.signup(formData, photoData.photo);
      handleSignupOrLogin();
      navigate('/shopper/nailtechs');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { name, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  };

  return (
    <Modal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form autoComplete="off" onSubmit={handleSubmit}>
          <p>{message}</p>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  value={name}
                  name="name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  autoComplete="off"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  autoComplete="off"
                  value={passwordConf}
                  name="passwordConf"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Upload Photo</FormLabel>
                <Input type="file" name="photo" onChange={handleChangePhoto} />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                isDisabled={isFormInvalid()}
              >
                Sign Up
              </Button>
              <Link to="/">
                <Button>Cancel</Button>
              </Link>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignupFormModal;
