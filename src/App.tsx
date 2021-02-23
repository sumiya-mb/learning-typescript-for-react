import React, {useState} from 'react';
import TodoList from "./component/TodoList";
import NewTodo from "./component/NewTodo";
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const randomizeId = Math.random().toString()
    setTodos(prevTodos => [
      ...prevTodos,
      {id: randomizeId, text: text}
    ])
  }
  const todoDeleteHandler = (id: string) => {
    setTodos(prevState => {
      return prevState.filter(todo => id !== todo.id)
    })
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
