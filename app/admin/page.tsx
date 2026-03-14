export default function AdminPage() {
  return (
    <div className="admin-root">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h1 className="admin-title">Admin Panel</h1>

        <ul className="admin-menu">
          <li className="active">Dashboard</li>
          <li>Question Upload</li>
          <li>AD</li>
          <li>Security</li>
          <li>Admin Panel</li>
		  <li>Admin Role</li>
        </ul>
      </aside>

      {/* Main Area */}
      <main className="admin-main">
        <div className="top-bar">
          <button className="signin-btn">Sign in</button>
        </div>

        <div className="admin-content">
          <h2>Welcome Admin 👋</h2>
          <p>Select an option from the sidebar to continue.</p>
        </div>
      </main>
    </div>
  );
}
