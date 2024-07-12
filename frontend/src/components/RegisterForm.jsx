import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/users/register`, { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={registerHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
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
      <button type="submit">Register</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default RegisterForm;
