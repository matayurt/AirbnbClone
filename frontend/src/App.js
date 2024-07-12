import React from "react";
import "daisyui/dist/full.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
