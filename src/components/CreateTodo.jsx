import { useState } from "react";

export const CreateTodo = ({ saveTodo }) => {

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(title)
    console.log(title)
    setTitle('');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          className="todo-input"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New TODO item"
          autoFocus/>
      </form>
    </div>
  )
}