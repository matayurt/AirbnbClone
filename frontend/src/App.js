import React from "react";
import "daisyui/dist/full.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Welcome to Airbnb Clone
        </h1>
        <RegisterForm />
        <LoginForm />
      </div>
    </>
  );
}

export default App;
