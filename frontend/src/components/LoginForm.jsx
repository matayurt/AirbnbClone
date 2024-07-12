import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post(
                '/api/users/login',
                {email, password},
                config
            );
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <form onSubmit={loginHandler}>
                <div>
                    <label>Email</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                    <button type="submit">Log In</button>
                </div>
            </form>
        </>
    )

}

export default LoginForm;