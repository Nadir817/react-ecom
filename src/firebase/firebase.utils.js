import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJDx9Lu3yCl4Ol849_qKycVlvBbJd81vE",
  authDomain: "ecommerce-db-6bec7.firebaseapp.com",
  databaseURL: "https://ecommerce-db-6bec7.firebaseio.com",
  projectId: "ecommerce-db-6bec7",
  storageBucket: "ecommerce-db-6bec7.appspot.com",
  messagingSenderId: "836280532832",
  appId: "1:836280532832:web:01b03e1af8146b64fda805"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
