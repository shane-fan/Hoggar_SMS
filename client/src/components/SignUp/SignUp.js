import React, { useState } from 'react'
import { auth } from '../../firebase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="email" placeholder="Email" value={email} />
        <input type="password" name="password" placeholder="Password" value={password}/>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}
