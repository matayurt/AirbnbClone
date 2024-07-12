import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const login = async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `http://localhost:5001/api/users/login`,
        { email, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      throw new Error("Login failed. Please check your email and password.");
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
