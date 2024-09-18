import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { tasks, updateTasks } = useContext(TaskContext);

    const toggleComplete = () => {
        const updatedTasks = tasks.map(t =>
            t.title === task.title ? { ...t, completed: !t.completed } : t
        );
        updateTasks(updatedTasks);
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter(t => t.title !== task.title);
        updateTasks(updatedTasks);
    };

    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
            <button onClick={toggleComplete}>Complete</button>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
};

export default TaskItem;
