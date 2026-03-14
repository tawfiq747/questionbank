// lib/userProfile.js
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function saveUserProfile(uid, data) {
  if (!uid) return;
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, data, { merge: true });
  } catch (error) {
    console.error("Error saving profile:", error);
  }
}