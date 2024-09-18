import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(loggedInUser);
            const storedTasks = JSON.parse(localStorage.getItem(`tasks_${loggedInUser}`)) || [];
            setTasks(storedTasks);
        }
    }, []);

    const addTask = (task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem(`tasks_${user}`, JSON.stringify(newTasks));
    };

    const updateTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(`tasks_${user}`, JSON.stringify(newTasks));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTasks, user, setUser, logout }}>
            {children}
        </TaskContext.Provider>
    );
};
