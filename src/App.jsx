import { useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {

  const [todos, setTodos] = useState([])

  const handleAddToDo = (title) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleRemove = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      My ToDo List
      <CreateTodo  saveTodo={handleAddToDo}/>
      <Todos todos={todos} removeTodo={handleRemove}/>
    </>
  )
}

export default App
