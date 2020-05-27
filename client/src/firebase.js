import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBpxPa-CGX8QrAhLj1gA7pIHWzh4-yYwoE',
  authDomain: 'hoggarsms.firebaseapp.com',
  databaseURL: 'https://hoggarsms.firebaseio.com',
  projectId: 'hoggarsms',
  storageBucket: 'hoggarsms.appspot.com',
  messagingSenderId: '965765890458',
  appId: '1:965765890458:web:6e6c158d093c02e89cfa23',
  measurementId: 'G-T53B1NJCRY'
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export const createUserProfileDocument = async (user, data) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)
}

export default firebase
