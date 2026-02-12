import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCard from "./AuthCard";

function App() {
  return (
    <GoogleOAuthProvider clientId="477480793924-42ha6uriv1u4fcosgrv2ugkvkvpvmdig.apps.googleusercontent.com
">
      <AuthCard />
    </GoogleOAuthProvider>
  );
}

export default App;
