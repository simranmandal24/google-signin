import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCard from "./AuthCard";

function Homepage() {
  return (
    <GoogleOAuthProvider clientId="477480793924-l3jvjn8vhhgnd79aad16n7p1nne9m5q7.apps.googleusercontent.com">
      <AuthCard />
    </GoogleOAuthProvider>
  );
}

export default Homepage;
