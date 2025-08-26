import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


const signup=async (name, email, password) => {
  try {
   const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;
    await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        email,
        authProvider: "local",
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}


const login=async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}


const logout = async () => {
  try {
    await auth.signOut();
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
    
  }
}
export { signup, login, logout, db, auth };