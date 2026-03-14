"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className={`dashboard-root ${collapsed ? "collapsed" : ""}`}>
      {/* ===== Sidebar ===== */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle Sidebar"
          >
            <img src="/toggle.png" alt="toggle" />
          </button>
        </div>

        <nav className="sidebar-menu">
          <div className="menu-item active" onClick={() => router.push("/")}>
            <span className="icon">🏠</span>
            {!collapsed && <span className="label">Dashboard</span>}
          </div>

          <div
            className="menu-item"
            onClick={() => router.push("/questionbank/physics")}
          >
            <span className="icon">🗃️</span>
            {!collapsed && <span className="label">Question Bank</span>}
          </div>

          <div className="menu-item" onClick={() => router.push("/mcq")}>
            <span className="icon">📝</span>
            {!collapsed && <span className="label">MCQ</span>}
          </div>

          <div className="menu-item" onClick={() => router.push("/written")}>
            <span className="icon">✍️</span>
            {!collapsed && <span className="label">Written</span>}
          </div>

          <div className="menu-item" onClick={() => router.push("/profile")}>
            <span className="icon">👤</span>
            {!collapsed && <span className="label">Profile</span>}
          </div>

          <div className="menu-item" onClick={() => router.push("/settings")}>
            <span className="icon">⚙️</span>
            {!collapsed && <span className="label">Settings</span>}
          </div>
        </nav>
      </aside>

      {/* ===== Main ===== */}
      <main className="dashboard-main">
        <div className="dashboard-topbar">
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontWeight: "bold" }}>{user.email}</span>
              <button
                className="signin-btn"
                onClick={handleLogout}
                style={{ backgroundColor: "#ff4d4f" }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="signin-btn"
              onClick={() => router.push("/auth")}
            >
              Sign In
            </button>
          )}
        </div>

        <div className="dashboard-content">
          <h1>{user ? "Welcome Back!" : "Welcome Guest"}</h1>
          <p>This is your main dashboard content area.</p>
        </div>
      </main>
    </div>
  );
}