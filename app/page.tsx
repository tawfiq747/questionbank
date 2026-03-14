"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <div className={`dashboard-root ${collapsed ? "collapsed" : ""}`}>
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            ☰
          </button>
        </div>

        <nav className="sidebar-menu">
          <div className="menu-item active" onClick={() => router.push("/")}>
            <span className="icon">🏠</span>
            {!collapsed && <span className="label">Dashboard</span>}
          </div>
          <div className="menu-item" onClick={() => router.push("/mcq")}>
            <span className="icon">📝</span>
            {!collapsed && <span className="label">MCQ</span>}
          </div>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <button className="signin-btn" onClick={() => router.push("/mcq")}>
            Start MCQ →
          </button>
        </div>
        <div className="dashboard-content">
          <h1>Welcome to Question Bank! 📚</h1>
          <p>Select MCQ from sidebar to start practicing.</p>
        </div>
      </main>
    </div>
  );
}