import React from 'react';

interface todoListProps {
  todos: { id: string, text: string }[]
}

const TodoList: React.FC<todoListProps> = ({todos}) => {

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
