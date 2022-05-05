import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCekjvc2eRmmWVHaIj6Sm-7VRc7AlB1irE",
    authDomain: "crwn-clothing-v2-4c5f2.firebaseapp.com",
    projectId: "crwn-clothing-v2-4c5f2",
    storageBucket: "crwn-clothing-v2-4c5f2.appspot.com",
    messagingSenderId: "835285647344",
    appId: "1:835285647344:web:11de6f1ad86cdd21436735"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    propmt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)