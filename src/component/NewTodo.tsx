import React, {useRef} from 'react';
import {Button, Form} from "react-bootstrap";

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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="todo-text">Todo Text</Form.Label>
          <Form.Control type="text" placeholder="What's your todo?"  ref={textInputRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Todo
        </Button>
      </Form>
  );
};

export default NewTodo;
