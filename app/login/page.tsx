"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh(); // 🔥 THIS LINE FIXES IT
    } else {
      setError("❌ Wrong password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="avatar">👤</div>

        <h1>Welcome back</h1>
        <p>Please sign in to continue</p>

        <div className="input-box">
          <span className="lock">🔒</span>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        {error && <div className="error">{error}</div>}

        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
