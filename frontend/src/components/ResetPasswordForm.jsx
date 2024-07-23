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
            const { data } = await axios.post(`http://localhost:5001/api/users/reset-password`, { token, newPassword });
            setMessage(data.message);
            setError('');
        } catch (error) {
            setError(error.response.data.message);
            setMessage('');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
                <h1 className="text-2xl font-bold text-center">Reset Password</h1>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <label className="block text-sm">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary w-full">Reset Password</button>
                    </div>
                    {message && <div className="text-green-500 text-center">{message}</div>}
                    {error && <div className="text-red-500 text-center">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
