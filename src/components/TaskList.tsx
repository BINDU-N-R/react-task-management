import React from 'react';
import { Task } from '../redux/taskSlice'; // Assuming you have a Task interface in your slice
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/taskSlice';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="d-flex align-items-center justify-content-between border-bottom py-2"
          >
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <label
                className={`form-check-label ${
                  task.completed ? 'text-decoration-line-through text-muted' : ''
                }`}
              >
                {task.title}
              </label>
            </div>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-muted">No tasks to display</p>
      )}
    </div>
  );
};

export default TaskList;
