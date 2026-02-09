import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./Dashboard";
import "./auth.css";

function AuthCard() {
  const [user, setUser] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
  };

  if (user) {
    return <Dashboard user={user} logout={() => setUser(null)} />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome 👋</h2>
        <p>Login to explore something cool</p>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </div>
  );
}

export default AuthCard;
