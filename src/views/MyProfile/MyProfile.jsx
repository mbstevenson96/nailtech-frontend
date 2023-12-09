import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

const MyProfile = (props) => {

  return (
    <>
    <div>
    <div>
      <h2>Welcome, {props.profile.name} </h2>
      <img src={`${props.profile.photo}`} alt="profile upload" style={{height: '90px', marginTop: '0px'}} />
      <ChakraLink as={ReactRouterLink} to="/changePassword">Change Account Password</ChakraLink>
    </div>
    </div> 
    </>
  )
}

export default MyProfile