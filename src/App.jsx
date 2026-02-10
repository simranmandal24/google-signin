import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCard from "./AuthCard";

function App() {
  return (
    <GoogleOAuthProvider clientId="477480793924-8ga3fe4nnlk9u2ja3dvi9ov2n591cr6p.apps.googleusercontent.com">
      <AuthCard />
    </GoogleOAuthProvider>
  );
}

export default App;
