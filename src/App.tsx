import React from 'react';
import AddTask from './components/AddTask';
import Filter from './components/Filter';

const App: React.FC = () => (
  <div className="container mt-5">
    <div className="card shadow p-4">
      <h1 className="text-center mb-4">Task Management App</h1>
      <AddTask />
      <Filter />
    </div>
  </div>
);

export default App;
