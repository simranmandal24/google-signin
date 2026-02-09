import { useState } from "react";
import "./dashboard.css";
import hyGif from "./assets/hy-gif.gif"


function Dashboard({ user, logout }) {
  const [message, setMessage] = useState(
    "Click a button and see magic ✨"
  );

  return (
    <div className="dash-container">
      <div className="dash-card">
       <img src={hyGif} alt="hello gif" className="auth-gif" />
        <h2>Hello, {user.name} 👋</h2>
        <p>{user.email}</p>

        <p className="message">{message}</p>

        <div className="actions">
          <button onClick={() => setMessage("🎯 Exploring new ideas!")}>
            Explore
          </button>

          <button onClick={() => setMessage("✍️ Creating something awesome!")}>
            Create
          </button>

          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
