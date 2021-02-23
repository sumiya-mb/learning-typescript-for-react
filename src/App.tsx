import React from 'react';
import TodoList from "./component/TodoList";
import NewTodo from "./component/NewTodo";

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'First todo'}]

  return (
    <div className='App'>
      <NewTodo />
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
