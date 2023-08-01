import React from "react";
import { useState } from "react";
import {
  userAuthSignInWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button from "../../components/button/button.component.jsx";
import './sign-in.styles.scss'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userAuthSignInWithEmailAndPassword(email, password);
      console.log(response)
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
        alert('No user associated with this email!')
        break;

        case 'auth/wrong-password':
        alert('Email and password are incorrect!')
        break;

        default:
        console.log(error)
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in With your Email and Password!</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
        label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={'google'} onClick={logInWithGoogle}>Google Sign in</Button>
        </div>
       
      </form>
    </div>
  );
}

export default SignIn;
