import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3mfoZnzUZnBO2gwveDrBLqe1yIavCitA",
  authDomain: "crwn-db-ebe0c.firebaseapp.com",
  projectId: "crwn-db-ebe0c",
  storageBucket: "crwn-db-ebe0c.appspot.com",
  messagingSenderId: "905695044473",
  appId: "1:905695044473:web:962b5f9ef07b8fb84f85a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}


