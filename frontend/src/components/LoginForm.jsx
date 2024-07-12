import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(''); // Başarılı giriş yapıldığında hatayı sıfırla
    } catch (error) {
      setError('Login failed. Please check your email and password.');
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </>
  );
};

export default LoginForm;
