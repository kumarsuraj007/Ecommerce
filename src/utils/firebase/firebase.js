import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });
  await batch.commit();
  console.log('Done!')
}

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return categoryMap;
}

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInfo
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}

export const userAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const userAuthSignInWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

