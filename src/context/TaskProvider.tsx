import React, { createContext, useReducer, ReactNode } from 'react';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number };

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
