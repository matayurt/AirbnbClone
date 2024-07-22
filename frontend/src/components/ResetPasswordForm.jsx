import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

const ResetPasswordForm = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {   
            const { data } = await axios.post(`http://localhost:5001/api/users/reset-password`, {token, newPassword})
            setMessage(data.message);
            setError('');
        } catch (error) {
            setError(error.response.data.message);
            setMessage('');
            
        }
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>New Password</label>
                    <input 
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                     />
                </div>
                <button type='submit'>Reset Password</button>
                {message && <div>{message}</div>}
                {error && <div>{error}</div>}
            </form>
        </>
    );
};

export default ResetPasswordForm;