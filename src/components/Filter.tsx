import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TaskList from './TaskList';

const Filter: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'completed'>('all');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  // Filter tasks based on the selected filter
  const filteredTasks =
    selectedFilter === 'all'
      ? tasks
      : selectedFilter === 'active'
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

      
  return (
    <div>
      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group" aria-label="Task filters">
          <button
            className={`btn btn-outline-primary ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button
            className={`btn btn-outline-primary ${selectedFilter === 'active' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('active')}
          >
            Active
          </button>
          <button
            className={`btn btn-outline-primary ${selectedFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Display Filtered Tasks */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Filter;
