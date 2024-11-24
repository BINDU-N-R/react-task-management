import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control me-2"
        placeholder="Add a new task"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddTask;
