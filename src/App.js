import React, { useContext, useState } from 'react';
import { TaskContext } from './context/TaskContext';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';

const App = () => {
    const { user, logout } = useContext(TaskContext);
    const [showRegister, setShowRegister] = useState(false);

    const handleRegistrationSuccess = () => {
        setShowRegister(false);
    };

    return (
        <div className="container">
            {user ? (
                <>
                    <header>
                        <h1>Welcome, {user}</h1>
                        <button onClick={logout}>Logout</button>
                    </header>
                    <TaskList />
                </>
            ) : (
                <>
                    {showRegister ? (
                        <Register onRegisterSuccess={handleRegistrationSuccess} />
                    ) : (
                        <Login />
                    )}
                    <button onClick={() => setShowRegister(!showRegister)}>
                        {showRegister ? 'Back to Login' : 'Register'}
                    </button>
                </>
            )}
        </div>
    );
};

export default App;
