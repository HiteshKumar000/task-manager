import React, { useState } from 'react';

const Register = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username || !password) {
            setError('Username and password are required.');
            return;
        }
        if (localStorage.getItem(`user_${username}`)) {
            setError('Username already exists.');
        } else {
            localStorage.setItem(`user_${username}`, password);
            setError('');
            onRegisterSuccess();
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
