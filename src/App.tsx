import React, {useState} from 'react';
import TodoList from "./component/TodoList";
import NewTodo from "./component/NewTodo";
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const randomizeId = Math.random().toString()
    setTodos([{id: randomizeId, text: text}])
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
