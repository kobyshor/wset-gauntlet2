
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  User 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from "firebase/firestore";
import { UserAnswerRecord } from "../types";

// Configured with the user's project keys
const firebaseConfig = {
  apiKey: "AIzaSyCKXnfFVG8CGsL3l_rA8Ni8PjWLCxiLr3U",
  authDomain: "vintners-gauntlet.firebaseapp.com",
  projectId: "vintners-gauntlet",
  storageBucket: "vintners-gauntlet.firebasestorage.app",
  messagingSenderId: "240796928078",
  appId: "1:240796928078:web:5e654b41daa231e0b39b1f",
  measurementId: "G-CTERD9T27C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const saveUserData = async (userId: string, progress: Record<string, UserAnswerRecord>) => {
  if (!userId) return;
  try {
    await setDoc(doc(db, "users", userId), { 
      progress: progress,
      lastUpdated: Date.now() 
    }, { merge: true });
  } catch (e) {
    console.error("Error saving data", e);
  }
};

export const loadUserData = async (userId: string): Promise<Record<string, UserAnswerRecord> | null> => {
  if (!userId) return null;
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().progress as Record<string, UserAnswerRecord>;
  } else {
    return null;
  }
};
