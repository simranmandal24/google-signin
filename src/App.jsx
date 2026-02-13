import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCard from "./AuthCard";

function App() {
  return (
    <GoogleOAuthProvider clientId="854731033009-46k1rdkf2op9up5t752bb9vd4d38vtek.apps.googleusercontent.com">
      <AuthCard />
    </GoogleOAuthProvider>
  );
}

export default App;
