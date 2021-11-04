import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCqkRyak5_DXp-McW2I7aej8YW-0EMDPmY",
    authDomain: "crwn-db-57f19.firebaseapp.com",
    projectId: "crwn-db-57f19",
    storageBucket: "crwn-db-57f19.appspot.com",
    messagingSenderId: "44971803518",
    appId: "1:44971803518:web:079c1a480c7094bbb6a92f",
    measurementId: "G-NVD43VVCHN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;