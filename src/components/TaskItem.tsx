import React from 'react';
import { Task } from '../context/TaskProvider';
import { useTasks } from '../context/TaskProvider';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { dispatch } = useTasks();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Delete</button>
    </div>
  );
};

export default TaskItem;
