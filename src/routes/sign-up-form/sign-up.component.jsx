import React from "react";
import { useState } from "react";
import {
  userAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button from "../../components/button/button.component.jsx";
import './sign-up.styles.scss'

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      const { user } = await userAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      alert("Sign up Successful!");
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up With your Email and Password!</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
        label="Display Name"
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

export default SignUp;
