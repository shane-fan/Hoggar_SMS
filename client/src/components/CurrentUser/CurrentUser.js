import React from 'react'

import { signOut } from '../../firebase'

export default function CurrentUser({ photoURL, email }) {
  return (
    <div>
      {photoURL && <img src={photoURL} alt={email} />}
      <h2>{email}</h2>
      <button onClick={signOut}>Sign Out</button> 
    </div>
  )
}
