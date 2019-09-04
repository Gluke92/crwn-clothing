import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDODhCqvO_pn1Ep4XGk5BUz4xv6HZ-NTnM",
    authDomain: "crwn-db-c7b64.firebaseapp.com",
    databaseURL: "https://crwn-db-c7b64.firebaseio.com",
    projectId: "crwn-db-c7b64",
    storageBucket: "",
    messagingSenderId: "489458887926",
    appId: "1:489458887926:web:32bd729921d5e1c9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) { /*create a snapshot, if no snapshot object exists for a user! */
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;