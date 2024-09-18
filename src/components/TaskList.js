import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    });

    return (
        <div>
            <h2>Your Tasks</h2>
            <AddTask />
            <div>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
            <ul>
                {filteredTasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
