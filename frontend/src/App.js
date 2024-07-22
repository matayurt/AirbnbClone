import React from "react";
import "daisyui/dist/full.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPasswordForm from "./components/ResetPasswordForm";
import ResetPasswordRequestForm from "./components/ResetPasswordRequestForm";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route
                path="/reset-password-request"
                element={<ResetPasswordRequestForm />}
              />
              <Route path="/reset/:token" element={<ResetPasswordForm />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
