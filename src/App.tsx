import React from 'react';
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'First todo'}]

  return (
    <div className='App'>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
