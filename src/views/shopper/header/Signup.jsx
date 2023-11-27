import { useState } from 'react'
import SignupForm from '../../../components/SignupForm/SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
      <h4>Sign Up</h4>
      <p>{message}</p>
      <div>
        <SignupForm {...props} updateMessage={updateMessage} />  
      </div> 
    </main>
  )
}

export default Signup