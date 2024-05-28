import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export const Todos = ({ todos, removeTodo }) => {

  const handleRemoveButton = (todo) => {
    console.log(`Removing ${todo.title} from list`);
    removeTodo(todo.id)
  }

  return(
    <ul className='todos'>
      {todos.map(todo => (
      <li className='todo' key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{`Completed: ${todo.completed}`}</p>
        <IconButton onClick={() => handleRemoveButton(todo)}>
          <DeleteIcon/>
        </IconButton>
      </li>
    ))}
    </ul>
  )
}