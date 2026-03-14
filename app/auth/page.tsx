"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function AuthPage() {
  const router = useRouter();

  // UI States
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    // 1. Validation
    if (!email || !pass) {
      setErr("Please enter both email and password.");
      return;
    }
    if (isRegister && !name.trim()) {
      setErr("Please enter your full name.");
      return;
    }

    setLoading(true);

    try {
      let uid = "";

      // 2. AUTHENTICATION (We must wait for this)
      if (isRegister) {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        uid = res.user.uid;
      } else {
        const res = await signInWithEmailAndPassword(auth, email, pass);
        uid = res.user.uid;
      }

      // 3. DATABASE SAVE (FIRE AND FORGET - NO AWAIT)
      // We removed 'await' so the code does NOT stop here.
      // It sends the data in the background and moves instantly to step 4.
      const userRef = doc(db, "users", uid);
      const userData = isRegister 
        ? { name: name.trim(), email, createdAt: Date.now(), lastLogin: Date.now() }
        : { email, lastLogin: Date.now() };

      setDoc(userRef, userData, { merge: true })
        .then(() => console.log("Profile saved in background"))
        .catch((err) => console.log("Profile save skipped:", err));

      // 4. INSTANT REDIRECT
      console.log("Redirecting...");
      window.location.href = "/";

    } catch (e: any) {
      console.error("Auth Error:", e);
      setLoading(false);

      if (e.code === "auth/invalid-credential" || e.code === "auth/user-not-found") {
        setErr("Incorrect email or password.");
      } else if (e.code === "auth/wrong-password") {
        setErr("Incorrect password.");
      } else if (e.code === "auth/email-already-in-use") {
        setErr("This email is already registered.");
      } else {
        setErr("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="neu-auth-wrapper">
      <div className="neu-auth-card">
        <div className="neu-auth-header">
          <div className="neu-auth-icon">
            <div className="neu-auth-icon-inner">👤</div>
          </div>
          <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>
          <p>{isRegister ? "Register to continue" : "Please sign in to continue"}</p>
        </div>

        <form className="neu-auth-form" onSubmit={handleSubmit}>
          {err && <div className="neu-error">{err}</div>}

          {isRegister && (
            <div className="neu-field">
              <div className="neu-input">
                <span className="neu-left-icon">🪪</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                />
                <label>Full Name</label>
              </div>
            </div>
          )}

          <div className="neu-field">
            <div className="neu-input">
              <span className="neu-left-icon">📧</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
              />
              <label>Email Address</label>
            </div>
          </div>

          <div className="neu-field">
            <div className="neu-input neu-password">
              <span className="neu-left-icon">🔒</span>
              <input
                type={showPass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder=" "
              />
              <label>Password</label>
              <button
                type="button"
                className={`neu-eye ${showPass ? "active" : ""}`}
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button className={`neu-btn ${loading ? "loading" : ""}`} disabled={loading}>
            <span className="btn-text">
              {loading ? "Processing..." : isRegister ? "Register" : "Sign In"}
            </span>
          </button>

          <div className="neu-switch">
            {isRegister ? "Already have an account?" : "New here?"}{" "}
            <span onClick={() => { setIsRegister(!isRegister); setErr(""); }}>
              {isRegister ? "Sign In" : "Create Account"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}