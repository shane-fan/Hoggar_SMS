import React, {useState, useEffect} from 'react';

import Authentication from './components/Authentication/Authentication'
import {firestore, auth} from './firebase'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      setUser(user)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div className="App">
      <h1>Hoggar SMS</h1>
      <Authentication user={user} />
    </div>
  );
}

export default App;
