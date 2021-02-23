import React, {useRef} from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id='todo-text' ref={textInputRef}/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
