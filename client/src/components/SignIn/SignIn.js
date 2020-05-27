import React, { useState, useEffect } from 'react'

import { signInWithGoogle } from '../../firebase'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="text" name="email" placeholder="Email" value={email} />
        <input type="password" name="password" placeholder="Password" value={password} />
        <input type='submit' value='Sign In' />
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </form>
    </div>
  )
}
