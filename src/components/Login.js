import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import axios from "axios";
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      // Initiate Google login
      const result = await signInWithPopup(auth, provider);

      console.log(result);
  
      // Retrieve the authenticated user
      const user = result.user;
  
      // Fetch the ID token for backend verification
      const idToken = await user.getIdToken();
      console.log(idToken);
  
      // Send the token to the backend to retrieve facultyId
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/facultyId`, { token: idToken });

      console.log(response);
  
      if (response.data.success) {
        // Extract facultyId from the backend response
        const { facultyId } = response.data;
  
        // Navigate to the faculty page using the facultyId
        navigate(`/facultyPage/${facultyId}`);
      } else {
        // Handle unsuccessful responses
        setError("No associated faculty or invalid login.");
      }
    } catch (error) {
      // Log and display errors
      console.error("Google login failed: ", error);
      setError("An error occurred during Google login. Please try again.");
    }
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const idToken = await user.getIdToken();

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/facultyId`, { token: idToken });

      if (response.data.success) {
        const { facultyId } = response.data;
        navigate(`/facultyPage/${facultyId}`);
      } else {
        setError("Invalid login or no associated faculty.");
      }
    } catch (err) {
      console.error("Login failed: ", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card shadow">
        <h1 className="text-center mb-4">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          {/* <button onClick={googleLogin}>Sign in with Google</button> */}
        </form>
        {error && <p className="text-center text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Login;