import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [error, setError] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleAddTask = () => {
        if (!taskTitle) {
            setError('Task title cannot be empty.');
            return;
        }

        addTask({ title: taskTitle, completed: false });
        setTaskTitle('');
        setError('');
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="New Task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
