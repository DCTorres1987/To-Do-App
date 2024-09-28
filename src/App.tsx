import React from 'react';
import ToDoTask from './component/ToDoTask';
import { TaskProvider } from './component/ToDoContext';

function App() {
  return (
    <TaskProvider>
      <ToDoTask />
    </TaskProvider>
  );
}

export default App;
