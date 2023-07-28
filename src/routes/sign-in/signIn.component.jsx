import {signInWithGooglePopup, createUserDocumentFromAuth, signWithGoogleRedirect} from '../../utils/firebase/firebase.js'
import SignUp from '../sign-up-form/sign-up.component.jsx';

function SignIn() {
const logInWithGoogle = async () => {
const {user} = await signInWithGooglePopup();
const userDocRef = await createUserDocumentFromAuth(user)
}
  return (
    <div>
      <h1>SignIn with google</h1>
      <button onClick={logInWithGoogle}>SignIn</button>
      <SignUp />
    </div>
  )
}

export default SignIn
