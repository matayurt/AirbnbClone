import axios from "axios";
import React, { useState } from "react";

const ResetPasswordRequestForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5001/api/users/reset-password-request`, {email});
            setMessage(data.message);
            setError('')
        } catch (error) {
            setError(error.response.data.message);
            setMessage('')
        }
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Send Reset Link</button>
                {message && <div>{message}</div>}
                {error && <div>{error}</div>}
            </form>
        </>
    )
}

export default ResetPasswordRequestForm;