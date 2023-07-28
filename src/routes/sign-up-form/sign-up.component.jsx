import React from "react";
import { useState } from "react";
import {
  userAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";

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
    <div>
      <h1>Sign up With your Email and Password!</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
