import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3u60wFOuvPe-oLLEeUX1SuJbhFq2_kgA",
    authDomain: "crwn-clothing-v2-91ba7.firebaseapp.com",
    projectId: "crwn-clothing-v2-91ba7",
    storageBucket: "crwn-clothing-v2-91ba7.appspot.com",
    messagingSenderId: "527455137734",
    appId: "1:527455137734:web:967c0b4c34c36779ea0cc7"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    propmt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log('error creating the user.', error.message)
        }
    }

    return userDocRef
}