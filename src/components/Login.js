// src/components/Login.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(TaskContext);

    const handleLogin = () => {
        if (!username || !password) {
            setError('Username and password are required.');
            return;
        }

        // Validate user credentials
        const storedPassword = localStorage.getItem(`user_${username}`);
        if (storedPassword === password) {
            localStorage.setItem('user', username);
            setUser(username);
            setError('');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
