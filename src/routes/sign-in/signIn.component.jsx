import React from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.js'

function SignIn() {
const logInWIthGoogle = async () => {
const {user} = await signInWithGooglePopup();
const userDocRef = await createUserDocumentFromAuth(user)
}
  return (
    <div>
      <h1>SignIn with google</h1>
      <button onClick={logInWIthGoogle}>SignIn</button>
    </div>
  )
}

export default SignIn
