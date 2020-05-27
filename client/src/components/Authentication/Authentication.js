import React from 'react'

import CurrentUser from '../CurrentUser/CurrentUser'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

export default function Authentication({ user, loading }) {
  if (loading) return null
  return (
    <div>
      {user ? (
        <CurrentUser {...user} />
      ) : (
        <div>
          <SignIn />
          <SignUp />
        </div>
      )}
    </div>
  )
}
